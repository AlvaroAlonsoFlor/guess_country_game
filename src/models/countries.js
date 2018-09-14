const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Countries = function() {
  this.countries = []
};

Countries.prototype.bindEvents = function () {
  this.getData();

};

Countries.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get()
    .then((data) => {
      this.countries = data;
      PubSub.publish('Countries:all', this.countries);
    })

    .catch((message) => {
      console.error(message);
    });
};

module.exports = Countries;
