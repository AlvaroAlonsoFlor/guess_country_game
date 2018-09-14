const Countries = require('./models/countries.js');
const RandomFlag = require('./views/random_flag.js');
const Result = require('./views/result.js');

document.addEventListener('DOMContentLoaded', () => {
  const countries = new Countries();
  countries.bindEvents();

  const result = new Result();
  result.bindEvents();


});
