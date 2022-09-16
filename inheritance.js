class MainBuilder {
    constructor(value) {
        this.value = value;
    }

    get() {
        return this.value;
    }
}

//ES6

class IntBuilder extends MainBuilder {
    plus(...args) {
        [...args].forEach(item => this.value += item)
        return this
    }
    
    minus(...args) {
        [...args].forEach(item => this.value -= item)
        return this
    }
}

let meow = new IntBuilder(6);