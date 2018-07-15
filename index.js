'use strict'
const waitFor = require('./p-wait-for')
const existy = require('existy')

module.exports = (condition, opts) => {
  let waitVal
  return waitFor(() => {
    return Promise.resolve().then(condition).then(val => {
      waitVal = val
      return existy(val)
    })
  }, opts).then(() => waitVal)
}
