const { Map } = require('immutable');

function getImmutableObject (obj) {
  return Map(obj);
}

module.exports = { getImmutableObject };
