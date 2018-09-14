const Countries = require('./models/countries.js');
const RandomFlag = require('./views/random_flag.js');

document.addEventListener('DOMContentLoaded', () => {
  const countries = new Countries();
  countries.bindEvents();
});
