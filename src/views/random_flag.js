const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_append.js');
const Request = require('../helpers/create_append.js');

const RandomFlag = function() {
  this.container = document.querySelector('#flag-container')
}

RandomFlag.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:all', (e) => {
    const countryFlag = this.getFlag(e.detail);
    const element = createAndAppend('img', 'flag', '', this.container);
    element.src = countryFlag;


    console.log(countryFlag);

  });
};

RandomFlag.prototype.getFlag = function (countries) {
  return countries[this.randomInt(countries.length)].flag;
};

RandomFlag.prototype.randomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = RandomFlag;
