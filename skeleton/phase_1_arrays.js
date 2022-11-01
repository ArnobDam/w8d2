Array.prototype.uniq = function () {
    let uniqArr = [];
    for (let i = 0; i < this.length; i++) {
        if (!uniqArr.includes(this[i])) {
            uniqArr.push(this[i]);
        }
    }
    return uniqArr;
}

let array = [1, 2, 2, 3, 3, 3, 4, 4];
console.log(array.uniq());

Array.prototype.twoSum = function () {
    let sumsArray = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                sumsArray.push([i, j]);
            }
        }
    }
    return sumsArray;
}

array = [0, 1, -2, -10, 685, 10, 2, 0];
console.log(array.twoSum());
// console.log(Object.array);

Array.prototype.transpose = function () {
    let transposed = []
}