// let sorted = false
// while not sorted 
// sorted = true
// 2 for loops 
// if this[i +1] < this[i] 
// this[i], this[i+1] = this[i+1], this[i]
// sorted = false
// this

Array.prototype.bubbleSort = function () {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length; i++) {
            for (let j = i + 1; j < this.length; j++) {
                if  (this[i] > this[j]) {
                    sorted = false;
                    [this[i], this[j]] = [this[j], this[i]]
                }
            }
        }
    }
    return this
}

let array = [2, 34, 5, 86, 42, 45, 43]
console.log(array.bubbleSort())