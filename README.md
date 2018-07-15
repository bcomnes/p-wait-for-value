# p-wait-for-value [![Build Status](https://travis-ci.org/bcomnes/p-wait-for-value.svg?branch=master)](https://travis-ci.org/bcomnes/p-wait-for-value)

> Wait for a condition to return existy then pass that value on

Can be useful for polling for a value to show up.


## Install

```
$ npm install --save p-wait-for-value
```


## Usage

```js
const pWaitFor = require('p-wait-for-value');
const pathExists = require('path-exists');
const get = require('lodash.get');

pWaitForValue(() => someAPI().then(body => get(body, 'some.val')))
  .then((val) => {
	console.log('Yay! The value exists on the api payload.');
})
```


## API

### pWaitForValue(condition, [options || interval])

Returns a `Promise` that resolves when `condition` returns a value that is existy (`val !== null || val !== undefined`). Condition is polled if `condition` is not existy. Rejects if `condition` throws or returns a `Promise` that rejects.  Returns the first value that is found to be existy.

#### condition

Type: `Function`

Expected to return any existy value as soon as it is available.  Otherwise return `null` or undefined.

#### options

##### interval

Type: `number`<br>
Default: `20`

Number of milliseconds to wait before retrying `condition`.  You can also pass a number in place of the options object to set the interval.

##### timeout

Type: `number`<br>
Default: `Infinity`

Number of milliseconds to wait before automatically rejecting.


## Related

- [p-whilst](https://github.com/sindresorhus/p-whilst) - Calls a function repeatedly while a condition returns true and then resolves the promise
- [p-wait-for](https://github.com/sindresorhus/p-wait-for) - Wait for a condition to be true or false.  Useful for polling when you don't need to retrieve a value from the condition.
- [More…](https://github.com/sindresorhus/promise-fun)


## License

MIT © [Bret Comnes](https://bret.io)
