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
        return this;
    }

    minus(...args) {
        [...args].forEach(item => this.value -= item)
        return this;
    }

    multiply(x) {
        return this.value * x;
    }
    divide(x) {
        return Math.floor(this.value / x);
    }
    mod(x) {
        return this.value % x;
    }
    
}

let meow = new IntBuilder(25);