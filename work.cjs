// EMMIT AN EVENT INDICATING THAT THE FILE UPLOAD HAS STARTED

let timeId;

const { EventEmitter } = require('events');
const { clearInterval } = require('timers');
const fileUpload = new EventEmitter()
fileUpload.on('upload', () => { console.log('The file upload has started') })
fileUpload.on('complete', () => { console.log('The upload is complete') })
fileUpload.on('processing', () => { console.log('The processing has started') })
fileUpload.on('com', () => {
    console.log('The processing is complete')
    clearInterval(timeId)
})

const events = ['complete', 'processing', 'com'];
let i = 0;

fileUpload.emit('upload')

timeId = setInterval(() => {
    fileUpload.emit([events[i]]);
    i++
}, 2000);

// fileUpload.emit('complete')



// CUSTOM ERROR

class myError extends Error {
    constructor(varName = '') {
        super(varName + 'Opps there was an error')
        this.code = 'ERR_MUST_BE_LESS_THAN_0.8'
    }
    get name() {
        return 'myError'[' + this.code +']
    }
}

function err(number) {
    if (typeof number !== 'number') throw new TypeError('must be a number')
    if (number > 0.8) throw new RangeError ('must be less that 0.8')
    if (number > 0.8) throw new myError('number-input')
    return number
}

err(0.8)
