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
        this.value = this.value * x;
        return this;
    }
    divide(x) {
        this.value = Math.floor(this.value / x);
        return this;
    }
    mod(x) {
        return this.value % x;
    }

    static getRandom(from, to) {
        return  Math.ceil(Math.random() * (from - to) + to);
    }
}

// let meow = new IntBuilder(25);

//ES5

strBuilder.prototype.get = function() {
    return 
}

strBuilder.prototype = Object.create(MainBuilder.prototype);

function strBuilder(value) {
    Object.assign(this, new MainBuilder(value))
}


strBuilder.prototype.plus = function(...args) {
    [...args].forEach(item => this.value += item)
    return this;
}


let meow = new strBuilder('Hello');

