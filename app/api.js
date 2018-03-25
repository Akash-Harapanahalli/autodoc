const express = require('express');
const router = express.Router();

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
