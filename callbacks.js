const {readFile} = require("node:fs")

readFile(__filename, (err, content) => {
    if(err) {
        console.error(err)
        return
    }
    console.log(content.toString())
})