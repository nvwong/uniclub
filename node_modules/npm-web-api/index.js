'use strict'

var request = require('request')
  , npmapi = {}
  , REGISTRY_ROOT = 'http://registry.npmjs.org'

function generateJsonCallback(callback) {
  return function (err, response, body) {
    if (err) {
      callback(err)
      return
    }

    if (typeof body === 'object') {
      callback(null, body)
      return
    }

    try {
      body = JSON.parse(body)
    } catch (e) {
      callback(e)
      return
    }

    callback(null, body)
  }
}

npmapi.getModulesByUser = getModulesByUser
function getModulesByUser(username, callback) {
  request.get(REGISTRY_ROOT + '/-/by-user/' + username, generateJsonCallback(function (err, body) {
    callback(err, body && body[username])
  }))
}

npmapi.getLatest = getLatest
function getLatest(module, callback) {
  request.get(REGISTRY_ROOT + '/' + module + '/latest', generateJsonCallback(callback))
}

module.exports = npmapi
