const Countries = require('./models/countries.js');
const RandomFlagView = require('./views/random_flag_view.js');
const InputView = require('./views/input_view.js');
const ResultView = require('./views/result_view.js');
const PlayAgainView = require('./views/play_again_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const countries = new Countries();
  countries.bindEvents();

  const flag = new RandomFlagView();
  flag.bindEvents();

  const answer = new InputView();
  answer.bindEvents();

  const result = new ResultView(countries);
  result.bindEvents();


});
