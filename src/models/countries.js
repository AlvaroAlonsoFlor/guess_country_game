const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Countries = function() {
  this.countries = []
  this.country = []
  this.request = new Request('https://restcountries.eu/rest/v2/all');
};

Countries.prototype.bindEvents = function () {
  this.getData();
  this.getRandomCountry();

};

Countries.prototype.getData = function () {
  this.request.get()
    .then((data) => {
      this.countries = data;
      PubSub.publish('Countries:all', this.countries);
    })

    .catch((message) => {
      console.error(message);
    });
};

GuessCountry.prototype.getRandomCountry = function (countries) {
  this.country = countries[this.randomInt(countries.length)];
  PubSub.publish('Countries:random', this.country);
};

Countries.prototype.randomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
}




module.exports = Countries;
