var cleanInput = require('./clean-input')

var response = [];

response.push(
  cleanInput(
    'today  built ourelves a lift',
    new Date()
  ),
  cleanInput(
    'created a plan for the programming skills run of our robot',
    new Date()
  ),
  cleanInput(
    'our claw is looking better, but tomorrow need to fix the lift',
    new Date()
  ),
  cleanInput(
    'worked on autostack programming today, updated PID values',
    new Date()
  ),
  cleanInput(
    'team roles for tournament',
    new Date()
  ),
  cleanInput(
    'changed the lifte tor bracing to stabilize it with triangle bracing',
    new Date()
  ),
  cleanInput(
    'new teams are attending the scrimmage, need to plan for them tomorrow',
    new Date()
  ),
  cleanInput(
    ' changed out the motors on the drive',
    new Date()
  ),
  cleanInput(
    'developed gear reduction for lift system to be able to hold the weight of the lifting motion',
    new Date()
  ),
  cleanInput(
    'spent lots of time documenting the programming API for the 5th iteration of robot code',
    new Date()
  ),
  cleanInput(
    'Changed the spacing in lift towers to minimize the friction on the lift',
    new Date()
  ),
  cleanInput(
    'need to do some optimizations on drivetrain friction',
    new Date()
  ),
  cleanInput(
    'found a major flaw in the drive motor gear meshing',
    new Date()
  ),
  cleanInput(
    'need to change out the chain on the drivetrain',
    new Date()
  ),
);

module.exports = {
  response: response
};
