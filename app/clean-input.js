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

  tagsToFind.forEach(function (element){
    if (textbody.includes(element)){
      tagsOut.push(element);
    }
  });

  return {
    text: textOut,
    timestamp: timeOut,
    tags: tagsOut
  };
};
