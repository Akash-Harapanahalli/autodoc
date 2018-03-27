console.log('-----------------Entered Lambda -------------------')
var http = require('http')
var https = require('https')
var querystring = require('querystring')

;('use strict')

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function(event, context) {
  try {
    console.log(
      'event.session.application.applicationId=' +
        event.session.application.applicationId
    )

    /**
     * Uncomment this if statement and populate with your skill's application ID to
     * prevent someone else from configuring a skill that sends requests to this function.
     */

    //     if (event.session.application.applicationId !== 'amzn1.echo-sdk-ams.app.05aecccb3-1461-48fb-a008-822ddrt6b516') {
    //         context.fail('Invalid Application ID');
    //      }

    if (event.session.new) {
      onSessionStarted({ requestId: event.request.requestId }, event.session)
    }

    if (event.request.type === 'LaunchRequest') {
      onLaunch(event.request, event.session, function callback(
        sessionAttributes,
        speechletResponse
      ) {
        context.succeed(buildResponse(sessionAttributes, speechletResponse))
      })
    } else if (event.request.type === 'IntentRequest') {
      onIntent(event.request, event.session, function callback(
        sessionAttributes,
        speechletResponse
      ) {
        context.succeed(buildResponse(sessionAttributes, speechletResponse))
      })
    } else if (event.request.type === 'SessionEndedRequest') {
      onSessionEnded(event.request, event.session)
      context.succeed()
    }
  } catch (e) {
    context.fail('Exception: ' + e)
  }
}

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
  console.log(
    'onSessionStarted requestId=' +
      sessionStartedRequest.requestId +
      ', sessionId=' +
      session.sessionId
  )

  // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
  console.log(
    'onLaunch requestId=' +
      launchRequest.requestId +
      ', sessionId=' +
      session.sessionId
  )

  var cardTitle = 'Hello, World!'
  var speechOutput = 'Welcome!'
  callback(
    session.attributes,
    buildSpeechletResponse(cardTitle, speechOutput, '', true)
  )
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
  console.log(
    'onIntent requestId=' +
      intentRequest.requestId +
      ', sessionId=' +
      session.sessionId
  )

  var intent = intentRequest.intent,
    intentName = intentRequest.intent.name

  // dispatch custom intents to handlers here
  if (intentName == 'UpdateIntent') {
    handleUpdateIntent(intent, session, callback)
  } else {
    // if (intentName == 'GetTodoIntent') {
    //     handleGetTodoIntent(intent, session, callback);
    // }
    throw 'Invalid intent'
  }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
  console.log(
    'onSessionEnded requestId=' +
      sessionEndedRequest.requestId +
      ', sessionId=' +
      session.sessionId
  )
}

var isDone = false

function postReq(message, session, callback) {
  var postData = querystring.stringify({
    msg: message
  })

  var options = {
    hostname: 'morning-garden-14636.herokuapp.com',
    path: '/api/messages/add',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  }

  var rawData = ''
  var req = http.request(options, function(res) {
    //console.log(STATUS: ${res.statusCode});
    //console.log(HEADERS: ${JSON.stringify(res.headers)});
    res.setEncoding('utf8')
    res.on('data', function(chunk) {
      //console.log(BODY: ${chunk});
      rawData += chunk
    })
    res.on('end', function() {
      console.log(rawData)
      //isDone = true
      callback(
        session.atributes,
        buildSpeechletResponseWithoutCard(
          'Okay. I sent the message ' + message + ' to AutoLog.tech',
          '',
          'true'
        )
      )
    })
  })

  req.on('error', function(e) {
    //console.error(problem with request: ${e.message});
  })

  console.log(message)

  req.write(postData)

  req.end()
}
// function getReq (session, callback) {

//     var options = {
//     hostname: '1af1e0c6.ngrok.io',
//     path: '/api/messages/add',
//     method: 'GET',
//     }
//     var rawData = ''
//     var req = http.request(options, function (res) {
//     //console.log(STATUS: ${res.statusCode});
//     //console.log(HEADERS: ${JSON.stringify(res.headers)});
//     res.setEncoding('utf8');
//     res.on('data', function (chunk) {
//     //console.log(BODY: ${chunk});
//     rawData += chunk
//     });
//     res.on('end', function () {
//       console.log(rawData);
//      //isDone = true
//       callback(session.atributes, buildSpeechletResponseWithoutCard( 'Okay. Finished. Here is what was logged: ', '', 'true'));
//     });
//     });

//     req.on('error', function (e) {
//     //console.error(problem with request: ${e.message});
//     });

//     console.log(message)

//     req.write(postData);

//     req.end();

// }

function handleUpdateIntent(intent, session, callback) {
  var AlexaMessage = intent.slots.UpdateMessage.value
  console.log(intent.slots)

  // isDone = false

  postReq(AlexaMessage, session, callback)
}
// function handleGetTodoIntent(intent, session, callback) {

//   // isDone = false

//     getReq( session, callback);

// }

// ------- Helper functions to build responses -------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
  return {
    outputSpeech: {
      type: 'PlainText',
      text: output
    },
    card: {
      type: 'Simple',
      title: title,
      content: output
    },
    reprompt: {
      outputSpeech: {
        type: 'PlainText',
        text: repromptText
      }
    },
    shouldEndSession: shouldEndSession
  }
}

function buildSpeechletResponseWithoutCard(
  output,
  repromptText,
  shouldEndSession
) {
  return {
    outputSpeech: {
      type: 'PlainText',
      text: output
    },
    reprompt: {
      outputSpeech: {
        type: 'PlainText',
        text: repromptText
      }
    },
    shouldEndSession: shouldEndSession
  }
}

function buildResponse(sessionAttributes, speechletResponse) {
  return {
    version: '1.0',
    sessionAttributes: sessionAttributes,
    response: speechletResponse
  }
}
