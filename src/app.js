const Countries = require('./models/countries.js');
const GuessCountry = require('./views/guess_country.js');

document.addEventListener('DOMContentLoaded', () => {
  const countries = new Countries();
  countries.bindEvents();

  const randomFlag = new GuessCountry();
  randomFlag.bindEvents();
  


});
