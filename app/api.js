const express = require('express');
const router = express.Router();

router.get('/messages', function (req, res, next) {
  console.log('hit messages api endpoint');
  return res.json(
    ({
      response: [
        {
          text: 'added dank claw',
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
  console.log(req);
  console.log('post request recieved: ' + req)
  return res.json('logged');
});

module.exports = router;
