const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_append.js');
const Request = require('../helpers/create_append.js');
const generateMap = require('../helpers/map_api.js');

const GuessCountry = function() {
  this.container = document.querySelector('#flag-container');
  this.form = document.querySelector('#guess');
  this.resultContainer = document.querySelector('#result');
  this.countries = [];
  this.country = [];
}

GuessCountry.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:all', (e) => {
    this.countries = e.detail;
    const countryFlag = this.getFlag(e.detail);
    const element = createAndAppend('img', 'flag', '', this.container);
    element.src = countryFlag;
    this.handleSubmit()

  });
};

GuessCountry.prototype.handleSubmit = function () {
  this.form.addEventListener('submit', (e) => {
    e.preventDefault();
    this.answer = e.target.country.value
    this.handleResult();
  })

};

GuessCountry.prototype.handleResult = function () {
  this.resultContainer.innerHTML = ''

  if (this.answer.toLowerCase() === this.country.name.toLowerCase()) {
    createAndAppend('h3', null, 'Very well done! Here you have some extra info', this.resultContainer)

  } else {
    createAndAppend('h3', null, `${this.answer} is not correct, it was ${this.country.name}, here you have some more info`, this.resultContainer)
  }

  this.extraInfo()

};

GuessCountry.prototype.extraInfo = function () {
  //play again
  createAndAppend('button', 'play-again-button', 'Play again', this.resultContainer);
  this.playAgain();

  const div = createAndAppend('div', 'extra-info', '', this.resultContainer)

  //info
  createAndAppend('h2', 'name', this.country.name, div);
  createAndAppend('p', 'population', `Population: ${this.country.population}`, div);
  createAndAppend('p', 'region', `Region: ${this.country.subregion}`, div);
  createAndAppend('p', 'capital', `Capital: ${this.country.capital}`, div);



  //map
  createAndAppend('div', null, ``, div).setAttribute('id', 'mapid');
  generateMap(this.country.latlng[0], this.country.latlng[1]);


};

GuessCountry.prototype.playAgain = function () {
  const button = document.querySelector('.play-again-button')
  button.addEventListener('click', (e) => {
    const countryFlag = this.getFlag(this.countries);
    this.container.innerHTML = ''
    this.resultContainer.innerHTML = ''
    const element = createAndAppend('img', 'flag', '', this.container);
    element.src = countryFlag;
    this.handleSubmit()
  })
};

GuessCountry.prototype.getFlag = function (countries) {
  this.country = countries[this.randomInt(countries.length)];
  return this.country.flag
};

GuessCountry.prototype.randomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = GuessCountry;
