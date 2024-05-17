class Wolf {
    constructor (name) {
        this.name = name
    }
    howl () { console.log(this.name + ' : awwoooooooo')}
}

class Dog extends Wolf {
    constructor(name){
        this.name = name
        super(name + "the dog")
    }
    ticky(){
        console.log(tjis.name + "ticky")
    }
}
const jack = new Dog('jack')
