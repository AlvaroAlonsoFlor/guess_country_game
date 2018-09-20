const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_append.js');

const PlayAgainView = function (countries) {
  this.container = document.querySelector('#result')
  this.flagContainer = document.querySelector('#flag-container');
  this.countries = countries
};

PlayAgainView.prototype.bindEvents = function () {
  this.playAgain();
};

PlayAgainView.prototype.playAgain = function () {
  createAndAppend('button', 'play-again-button', 'Play again', this.container);
  this.handleNewGame();
};

PlayAgainView.prototype.handleNewGame = function () {
  const button = document.querySelector('.play-again-button');
  button.addEventListener('click', (e) => {
    this.container.innerHTML = ''
    this.flagContainer.innerHTML = ''
    console.log('countries playagain', this.countries);
    this.countries.bindEvents();
  })
};

module.exports = PlayAgainView;
