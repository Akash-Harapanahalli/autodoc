// accepts string input and outputs:
// {
//   text,
//   timestamp,
//   tags
// }
var live = require('./live.js');

module.exports = function (textbody, time) {
  live.response.push({
    text: textbody,
    starttime: time,
    tags: ['default']
  });
};
