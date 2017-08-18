var npmapi = require('../')
  , expect = require('chai').expect

describe('NPM Web API', function () {
  describe('getModulesByUser', function () {
    it('should return an Array of module names by username', function (done) {
      npmapi.getModulesByUser('isaacs', function (err, modules) {
        expect(err).to.not.exist
        expect(modules).to.contain('sax')
        done()
      })
    })
  })

  describe('getLatest', function () {
    it('should return an Object of module metadata a la package.json', function (done) {
      npmapi.getLatest('sax', function (err, data) {
        expect(err).to.not.exist
        expect(data).to.have.property('name', 'sax')
        expect(data).to.have.property('version')
        expect(data).to.have.property('description')
        done()
      })
    })
  })
})
