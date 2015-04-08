var path = require('path')
  , root = path.join(__filename, '../../..')

module.exports = better;

better.path = function (filename) {
  return path.join(root, /\.js$/.test(filename) ? filename : filename + '.js');
}

function better(filename) {
  return require(better.path(filename));
}