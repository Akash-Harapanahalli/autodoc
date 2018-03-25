// accepts string input and outputs:
// {
//   text,
//   timestamp, --> "YYYY-MM-DD"
//   tags
// }

var tagsToFind = [
  "Lift",
  "Drive",
  "Mogo",
  "Intake",
  "Claw",
  "Programming",
  "Code",
  "GitHub",
  "Mech",
  "Mechanical",
  "Notebook",
  "Music",
  "Driving",
  "Practice"
]

module.exports = function (textbody, time) {

  var textOut = textbody
  var timeOut = time
  var tagsOut = []

  tagsToFind.forEach(function(element){
    if(textbody.contains(element)){
      tags.push(element)
    }
  })

  return {
    text: textOut,
    timestamp: timeOut,
    tags: tagsOut
  }
};
