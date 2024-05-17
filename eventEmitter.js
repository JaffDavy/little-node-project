// LISTERNING FOR EVENTS


// const { EventEmitter } = require('events')

// const ee = new EventEmitter()
// ee.on('my-event', () => { console.log('1st') })
// ee.on('my-event', () => { console.log('2nd') })
// ee.emit('my-event')



// PREPENDLISTENER


// const { EventEmitter } = require('events')

// const ee = new EventEmitter()
// ee.on('my-event', () => { console.log('2nd') })
// ee.prependListener('my-event', () => { console.log('1st') })
// ee.emit('my-event')



// SINGLE USE LISTENER


// const { EventEmitter } = require('events')
// const ee = new EventEmitter()
// ee.on('my-event', () => { console.log('my-event fired') })
// ee.emit('my-event')
// ee.emit('my-event')
// ee.emit('my-event')


// USE OF ONCE


// const { EventEmitter } = require('events')
// const ee = new EventEmitter()
// ee.once('my-event', () => { console.log('my-event fired') })
// ee.emit('my-event')
// ee.emit('my-event')
// ee.emit('my-event')


// REMOVING LISTENERS


// const { EventEmitter } = require('events')

// const ee = new EventEmitter()
// const listener1 = () => { console.log('listener 1')}
// const listener2 = () => { console.log('listener 2')}

// ee.on('my-event', listener1)
// ee.on('my-event', listener2)

// setInterval(() => {
//     ee.emit('my-event')
// }, 200)

// setTimeout(() => {
//     ee.removeListener('my-event', listener1)
// }, 500)

// setTimeout(() => {
//     ee.removeListener('my-event', listener2)
// }, 1100)


// RemoveAllListeners



// const { EventEmitter } = require('events')

// const ee = new EventEmitter()
// const listener1 = () => { console.log('listener 1')}
// const listener2 = () => { console.log('listener 2')}

// ee.on('my-event', listener1)
// ee.on('my-event', listener2)
// ee.on('another-event', () => { console.log('another event')})

// setInterval(() => {
//     ee.emit('my-event')
//     ee.emit('another-event')
// }, 200)

// setTimeout(() => {
//     ee.removeAllListeners('my-event')
// }, 500)

// setTimeout(() => {
//     ee.removeAllListeners()
// }, 1100)


// THE ERROR EVENT 

// const { EventEmitter } = require('events')
// const ee = new EventEmitter()

// process.stdin.resume() // to keep the process alive

// ee.on('error', (err) => {
//     console.log('got error:', err.message)
// })

// ee.emit('error', new Error('oh oh') )

// ABORTCONTROLLER

// import { once, EventEmitter } from 'events'
// import { setTimeout } from 'timers/promises'

// const sometimesLaggy = new EventEmitter()

// const ac = new AbortController()
// const { signal } = ac

// setTimeout(2000 * Math.random(), null, { signal }). then(() => {
//     sometimesLaggy.emit('ping')
// })
// setTimeout(500).then(() => ac.abort ())

// try {
//     await once(sometimesLaggy, 'ping', { signal })
//     console.log('pinged!')
// } catch (err) {
//     // ignore abort errors:
//     if (err.code !== 'ABORT_ERR') throw err
//     console.log('cancelled')
// }