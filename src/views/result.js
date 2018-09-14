const RandomFlag = require('./random_flag.js');
const Input = require('./input.js');

const Result = function() {

};

Result.prototype.bindEvents = function () {
  const randomFlag = new RandomFlag;
  randomFlag.bindEvents();
};

module.exports = Result;
