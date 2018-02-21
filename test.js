import test from 'ava';
import delay from 'delay';
import ps from './index'

test('test #1', t => {
    
  const p = ps(done => new Promise(resolve => {
    done()
    resolve()
  }))

  t.is(p.status(), true)

})

test('test #2', async t => {
    
  const p = ps(done => new Promise(resolve => {
    setTimeout(() => {
      done()
      resolve()
    }, 3000)
  }))
  
  const status = []

  status.push(p.status())

  await delay(1000)

  status.push(p.status())
  
  await delay(1000)

  status.push(p.status())
  
  await delay(1000)

  status.push(p.status())

  t.deepEqual(status, [false, false, false, true])

})

test('test #3', async t => {
  
  const p = ps(done => new Promise(resolve => {
    setTimeout(() => {
      done()
      resolve(1234)
    }, 2000)
  }))
  
  t.is(await p.promise, 1234)

})

test('test #4', async t => {
  
  const p = ps(done => new Promise((resolve, reject) => {
    setTimeout(() => {
      done()
      reject(new Error())
    }, 2000)
  }))

  await t.throws(p.promise)

})
