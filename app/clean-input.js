// accepts string input and outputs:
// {
//   text,
//   timestamp, --> "YYYY-MM-DD"
//   tags
// }

var tagsToFind = [
  'lift',
  'drive',
  'mogo',
  'intake',
  'claw',
  'programming',
  'code',
  'github',
  'mech',
  'mechanical',
  'notebook',
  'music',
  'driving',
  'practice',
  'robot',
  'tomorrow',
  'todo',
  'to do',
  'need to',
  'have to'
];

module.exports = function (textbody, time) {

  var textOut = textbody;
  var timeOut = time;
  var tagsOut = [];
  var isDone = true;

  tagsToFind.forEach(function (element){
    if (textbody.includes(element)){
      tagsOut.push(element);
    }
    for (var urgency of ['todo', 'to do', 'need to', 'have to', 'tomorrow']) {
      if (textbody.includes(urgency)) isDone = false; 
    }
    if (textbody.includes(element)){
      tagsOut.push(element);
    }
  });

  return {
    text: textOut,
    timestamp: timeOut,
    tags: tagsOut,
    done: isDone
  };
};
