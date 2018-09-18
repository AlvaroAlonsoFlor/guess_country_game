const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_append.js');

const InputView = function () {
  this.form = document.querySelector('#guess');
}

InputView.prototype.bindEvents = function () {
  this.handleSubmit();
};

InputView.prototype.handleSubmit = function () {
  this.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const answer = e.target.country.value;
    PubSub.publish('Input:answer', answer);
  });
};

module.exports = InputView;
