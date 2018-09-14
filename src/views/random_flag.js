const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/create_append.js');

const RandomFlag = function() {

}

RandomFlag.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:all', (e) => {
    console.log(e.detail);
  });
};

module.exports = RandomFlag;
