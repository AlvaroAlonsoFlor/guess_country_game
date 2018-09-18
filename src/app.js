const Countries = require('./models/countries.js');
const RandomFlagView = require('./views/random_flag_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const countries = new Countries();
  countries.bindEvents();

  const flag = new RandomFlagView;
  flag.bindEvents();





});
