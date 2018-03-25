const express = require('express');
const router = express.Router();

const getRandomMessages = (n) => {
  const getNext = () => {
    if (Math.random() < 0.9) return '          abcdefghijklmnopqrstuvwxyz'.split('')[Math.floor(Math.random() * 36)]
  };
  let logs = [];
  for (let i = 0; i < n; i++) {
    let msg = ''
    for (let j = 0; j < 80; j++) {
      msg += getNext();
    }
    let arr = ['lift', 'drive', 'memes', 'cameron', 'melee'];
    let t = arr[Math.floor(Math.random() * 5)];
    logs.push({
      text: '' +  i + ': ' + msg,
      timestamp: new Date(),
      tags: [t]
    });
  }
  return logs;
};

router.get('/logs', function (req, res, next) {
  console.log('hit messages api endpoint');
  return res.json({ response: getRandomMessages(200) });
});

router.get('/todos', function (req, res, next) {
  console.log('hit messages api endpoint');
  return res.json({ response: getRandomMessages(10) });
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
  return res.json(req.body);
});

module.exports = router;
