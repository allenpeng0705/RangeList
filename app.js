var RangeList = require('./src/RangeList').RangeList;

const rl = new RangeList();
rl.add([1, 5]);
console.log(rl.toString());

rl.add([10, 20]);
console.log(rl.toString());

rl.add([20, 20]);
console.log(rl.toString());

rl.add([20, 21]);
console.log(rl.toString());

rl.add([2, 4]);
console.log(rl.toString());

rl.add([3, 8]);
console.log(rl.toString());

rl.remove([10, 10]);
console.log(rl.toString());

rl.remove([10, 11]);
console.log(rl.toString());

rl.remove([15, 17]);
console.log(rl.toString());

rl.remove([3, 19]);
console.log(rl.toString());