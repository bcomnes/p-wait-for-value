const test = require('tape')
const pWaitForValue = require('./')

test('waits for existy and returns value', t => {
  t.plan(1)
  const testVal = 'hello world'

  function createPoller () {
    let val = null

    setTimeout(() => {
      val = testVal
    }, 1000)
    return () => {
      return Promise.resolve(val)
    }
  }

  const poller = createPoller()

  pWaitForValue(poller).then(got => {
    t.equal(got, testVal, 'returns value')
  })
})
