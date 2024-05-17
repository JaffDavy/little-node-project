function Wolf () {
    this.name = name
}

Wolf.prototype.howl = function () {
    console.log(this.name + ': awooooooooo')
}
Wolf.prototype.ticky = function () {
    console.log(this.name + ': ticky')
}

function Dog (name) {
    Wolf.call(this, name + "the dog")
}

Dog.prototype.bark = function () {
    console.log(this.name + "barks")
}

const { inherits } = requre("node:util")

inherits(Dog, Wolf)

const rufuse = new Dog("Rufus")

rufuse.howl()
rufuse.ticky()