// THROWING

// function doTask (amount) {
//     if (typeof amount !== 'number') throw new Error('amount must be a number')
//     // THE FOLLOWING IS NOT RECOMMENDED
//     if (amount <= 0) throw 'amount must be greater that zero'
//     return amount / 2
// }
// doTask(-1)


// NATIVE ERROR CONSTRUCTORS

// function doTask (amount) {
//     if (typeof amount !== 'number') throw new Error('amount must be a number')
//     if (amount <= 0) throw RangeError('amount must be greater that zero')
//     return amount / 2
// }
// doTask(-1)



// ODD ERROR CONSTRUCTOR

// class oddError extends Error {
//     constructor(varName = '') {
//         super(varName + 'must be even')
//         this.code = 'ERR_MUST_BE_EVEN'
//     }
//     get name() {
//         return 'oddError'[' + this.code +']
//     }
// }



// CUSTOM ERRORS

// function doTask(amount) {
//     if (typeof amount !== 'number') throw new TypeError('amount must be a number')
//     if (amount <= 0) throw new RangeError('amount must be greater that zero')
//     if (amount % 2) throw new oddError('amount')
//     return amount / 2
// }

// doTask(3)


// TRY/CATCH




