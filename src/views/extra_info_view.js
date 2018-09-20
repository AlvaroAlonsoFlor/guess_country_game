const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_append.js');
const generateMap = require('../helpers/map_api.js');

const ExtraInfoView = function (country) {
  this.resultContainer = document.querySelector('#result');
  this.country = country
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
  // this.handleRegionCountries(region);

};

// ExtraInfoView.prototype.handleRegionCountries = function (region) {
//   region.addEventListener('click', () => {
//     const table = this.createTable()
//     this.countries.forEach((country) => {
//       if (country.subregion === this.country.subregion && this.country !== country) {
//         const countryView = new CountryView(country, table);
//         countryView.render();
//       }
//     })
//
//   }, {once : true});
// };

module.exports = ExtraInfoView;
