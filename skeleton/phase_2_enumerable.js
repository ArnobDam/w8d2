Array.prototype.myEach = function (callback1) {
    for (let i = 0; i < this.length; i++) {
        callback1(this[i])
    }
}

Array.prototype.myMap = function (callback2) {
    let mappedArray = []

    this.myEach(function (el) {
        mappedArray.push(callback2(el))
    })
    return mappedArray
}

function callback(num) {
    return num + 1;
}

let array = [1, 2, 3, 4, 5]
console.log(array.myMap(callback))

Array.prototype.myReduce = function (callback, acc) {

    acc = acc || this.shift();

    this.myEach(function (el) {
        acc = callback(acc, el)
    })

    return acc;
}

function sum(x, y) {
    return x + y;
}

console.log(array.myReduce(sum, 45))

