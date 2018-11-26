'use strict';
const path = require('path');
const config = require(path.join(__dirname, '../../../config'));

module.exports = function(options) {
  options = options || {};
  return function(req, res) {
    res.send(config);
  };
};
