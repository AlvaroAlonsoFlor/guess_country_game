const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_append.js');

const ResultView = function () {
  this.container = document.querySelector('#result');
  this.country = [];
  this.answer = [];
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:random', (e) => {
    this.country = e.detail;
  });
  PubSub.subscribe('Input:answer', (e) => {
    this.answer = e.detail;
    this.handleResult();
  });

};



ResultView.prototype.handleResult = function () {
  this.container.innerHTML = ''

  if (this.answer.toLowerCase() === this.country.name.toLowerCase()) {
    createAndAppend('h3', null, 'Very well done! Here you have some extra info', this.container)

  } else if (this.handlePartialWin()) {
    createAndAppend('h3', null,`You answer ${this.answer} and the country was ${this.country.name}, close enough for a win!` , this.container)
  } else {
    createAndAppend('h3', null, `${this.answer} is not correct, it was ${this.country.name}, here you have some more info`, this.container)
  }
};

ResultView.prototype.handlePartialWin = function () {
  return this.answer.length > 5 && this.country.name.toLowerCase().includes(this.answer.toLowerCase());
};


module.exports = ResultView;
