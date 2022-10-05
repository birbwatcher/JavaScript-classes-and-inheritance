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
        this.value *= x;
        return this;
    }
    divide(x) {
        this.value /= x;
        return this;
    }
    mod(x) {
        this.value %= x;
        return this;
    }

    static random(from, to) {
        return Math.round(from + Math.random() * (to - from));
    }
}

//ES5


StrBuilder.prototype = Object.create(MainBuilder.prototype);

function strBuilder(value) {
    Object.assign(this, new MainBuilder(value))
}


strBuilder.prototype.plus = function(...args) {
    [...args].forEach(item => this.value += item)
    return this;
}

strBuilder.prototype.minus = function(x) {
    this.value =  this.value.substring(0, this.value.length - x);
    return this;
}

strBuilder.prototype.multiply = function(x) {
    this.value = (this.value + ' ').repeat(x);
    return this;
}

strBuilder.prototype.divide = function(x) {
    this.value = this.value.slice(0, x)
    return this;
}

strBuilder.prototype.remove = function(x) {
    let array = this.value.split('');
    let result = [];
    array.forEach(function(item) {
        if (item !== x) {
            result.push(item);
        }
    }) 
    this.value = result.join('');
    return this;
}

strBuilder.prototype.sub = function(x, y) {
    this.value = this.value.substr(x, y);
    return this;
}

let myNumber = new IntBuilder(10);
let myString = new strBuilder('Hello');
