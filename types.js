'use strict'

var defaults = require('creditcards-types')

module.exports = CardTypes
module.exports.defaults = defaults

function CardTypes (types) {
  var map = types.reduce(function (acc, type) {
    acc[type.name] = type
    return acc
  }, {})

  return {
    find: types.find.bind(types),
    some: types.some.bind(types),
    get: get
  }

  function get (name) {
    var type = map[name]

    if (!type) {
      throw new Error('No type found for name: ' + name)
    }

    return type
  }
}
