
if (process.platform == 'linux') {
  module.exports = require('ws');
}
else {
  module.exports = require('./uws.js');
}

const fs = require('fs');
const path = require('path');

module.exports.Proxy = require('http-proxy');

module.exports.getKeyData = function() {
  return fs.readFileSync(path.join(__dirname, 'data', 'this_is_not_a_security_issue.key'));
};

module.exports.getCertData = function() {
  return fs.readFileSync(path.join(__dirname, 'data', 'this_is_not_a_security_issue.crt'));
};
