const express = require('express');
const router = express.Router();

const getRandomMessages = (n) => {
  const getNext = () => 'abcdefghijklmnopqrstuvwxyz'.split('')[Math.floor(Math.random() * 26)];
  let logs = [];
  for (let i = 0; i < n; i++) {
    let msg = ''
    for (let j = 0; j < 80; j++) {
      msg += getNext();
    }
    logs.push({
      text: msg,
      timestamp: new Date(),
      tags: ['default']
    });
  }
  return logs;
};

router.get('/logs', function (req, res, next) {
  console.log('hit messages api endpoint');
  return res.json({ response: getRandomMessages(40) });
});

router.get('/messages', function (req, res, next) {
  console.log('hit messages api endpoint');
  return res.json(
    ({
      response: [
        {
          text: 'hi ',
          timestamp: '9pm',
          tags: ['claw']
        },
        {
          text: 'added dank claw',
          timestamp: '9pm',
          tags: ['claw']
        }
      ]
    })
  );
});


router.post('/messages/add', function (req, res) {
  console.log('[' + req._startTime + ']');
  console.log(req.body);
  return res.json('logged');
});

module.exports = router;
