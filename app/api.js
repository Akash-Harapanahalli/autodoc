const express = require('express');
const router = express.Router();

router.use('/messages', function (req, res, next) {
  res.json(
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
  console.log('hit messages api endpoint')
  next();
});

module.exports = router;
