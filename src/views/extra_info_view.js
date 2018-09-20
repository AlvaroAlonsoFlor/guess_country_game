const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_append.js');
const generateMap = require('../helpers/map_api.js');
const CountryView = require('./country_view.js');

const ExtraInfoView = function (country, countries) {
  this.resultContainer = document.querySelector('#result');
  this.country = country
  this.countries = countries
};

ExtraInfoView.prototype.render = function () {
  this.extraInfo();
};

ExtraInfoView.prototype.extraInfo = function () {

  const div = createAndAppend('div', 'extra-info', '', this.resultContainer)

  //info
  createAndAppend('h2', 'name', this.country.name, div);
  createAndAppend('p', 'population', `Population: ${this.country.population}`, div);
  const region = createAndAppend('p', 'region', `Region: ${this.country.subregion}`, div);
  createAndAppend('p', 'capital', `Capital: ${this.country.capital}`, div);

  //map
  createAndAppend('div', null, ``, div).setAttribute('id', 'mapid');
  generateMap(this.country.latlng[0], this.country.latlng[1]);

  //listener to access regions
  this.handleRegionCountries(region);

};

ExtraInfoView.prototype.handleRegionCountries = function (region) {
  region.addEventListener('click', () => {
    const table = this.createTable()
    this.countries.forEach((country) => {
      if (country.subregion === this.country.subregion && this.country !== country) {
        const countryView = new CountryView(country, table);
        countryView.render();
      }
    })

  }, {once : true});
};

ExtraInfoView.prototype.createTable = function () {
  const div = createAndAppend('div', 'subregion-container', '', this.resultContainer);
  createAndAppend('h2', 'subregion-title', `Other countries in ${this.country.subregion}`, div);
  const table = createAndAppend('table', 'subregion-table', '', this.resultContainer);
  const tr = createAndAppend('tr', 'fields', '', table);
  createAndAppend('th', null, 'Name', tr);
  createAndAppend('th', null, 'Population', tr);
  createAndAppend('th', null, 'Capital', tr);

  return table
};

module.exports = ExtraInfoView;
