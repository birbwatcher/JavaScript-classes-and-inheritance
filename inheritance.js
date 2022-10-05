let MainBuilder = (function() {
    function MyConstructor(value) {
        this.value = value;
    }

    MyConstructor.prototype.plus = function(x) {
        for (let i = 0;i<arguments.length;i++) {
            this.value += arguments[i]
        }
        return this;
    }

    MyConstructor.prototype.get = function() {
        return this.value;
    }

    MyConstructor.prototype.minus = function(x) {
        this.value =  this.value.substring(0, this.value.length - x);
        return this;
    }

    MyConstructor.prototype.multiply = function(x) {
        this.value = (this.value + ' ').repeat(x);
        return this;
    }

    MyConstructor.prototype.divide = function(x) {
        this.value = this.value.slice(0, x)
        return this;
    }

    return MyConstructor;
})();

//ES6

class IntBuilder extends MainBuilder {
    super(value) {
        this.value = value;
    }

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

let StrBuilder = (function() {
    function MyConstructor(value) {
        this.value = value;
    }

    return MyConstructor;
})();

StrBuilder.prototype = Object.create(MainBuilder.prototype);

StrBuilder.prototype.remove = function(x) {
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

StrBuilder.prototype.sub = function(x, y) {
    this.value = this.value.substr(x, y);
    return this;
}



let myNumber = new IntBuilder(10);
let myString = new StrBuilder('Hello');
