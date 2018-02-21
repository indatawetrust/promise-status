[![Build Status](https://travis-ci.org/indatawetrust/promise-status.svg?branch=master)](https://travis-ci.org/indatawetrust/promise-status)

#### install
```
npm i --save promise-status
```

#### usage
```js
const ps = require('promise-status');
const delay = require('delay');

(async () => {
  const p = ps(done => new Promise(async resolve => {
    await delay(3000)

    done()
    resolve('foo')
  }))

  await delay(1500)

  console.log(p.status()) // false

  await delay(1500)

  console.log(p.status()) // true

  p.promise.then(console.log) // foo

})()
```
