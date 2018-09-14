const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_append.js');
const Request = require('../helpers/create_append.js');

const GuessCountry = function() {
  this.container = document.querySelector('#flag-container');
  this.form = document.querySelector('#guess');
  this.resultContainer = document.querySelector('#result')
  this.country = [];
}

GuessCountry.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:all', (e) => {
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
  const div = createAndAppend('div', 'extra-info', '', this.resultContainer)

  createAndAppend('h2', null, this.country.name, div)
  createAndAppend('p', null, `Population: ${this.country.population}`, div)
  createAndAppend('p', null, `Region: ${this.country.subregion}`, div)
  //add some more stuff

  createAndAppend('button', 'button', 'Try again', div);
};

GuessCountry.prototype.getFlag = function (countries) {
  this.country = countries[this.randomInt(countries.length)];
  return this.country.flag
};

GuessCountry.prototype.randomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = GuessCountry;
