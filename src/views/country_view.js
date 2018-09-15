const createAndAppend = require('../helpers/create_append.js');

const CountryView = function(country, parent) {
 this.country = country;
 this.container = parent;
}

CountryView.prototype.render = function () {
  const row = createAndAppend('tr', 'region-country-row', '', this.container);
  createAndAppend('td', null, this.country.name, row);
  createAndAppend('td', null, this.country.population, row);
  createAndAppend('td', null, this.country.capital, row);
};

module.exports = CountryView;
