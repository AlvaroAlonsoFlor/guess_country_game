const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_append.js');

const RandomFlagView = function () {
  this.flag = []
  this.container = document.querySelector('#flag-container');
}

RandomFlagView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:random', (e) => {
    this.flag = e.detail.flag;
    this.createFlag()

  })
};

RandomFlagView.prototype.createFlag = function () {
  const element = createAndAppend('img', 'flag', '', this.container);
  element.src = this.flag;
};

module.exports = RandomFlagView;
