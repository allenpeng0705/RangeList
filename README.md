# RangeList
================

### Intro

This is one sample project using nodejs for Jerry.AI interview. I just learned the Javascript for two days and try to use the Mocha for testing. You can run the test code and the example code using the following instruction. 

# Installation

```
npm install
```

# Test

```
npm test
```

# Run

```
npm start
```

// Example run
const rl = new RangeList(); rl.toString(); // Should be ""
rl.add([1, 5]);
rl.toString(); // Should be: "[1, 5)"
rl.add([10, 20]);
rl.toString(); // Should be: "[1, 5) [10, 20)"
rl.add([20, 20]);
rl.toString(); // Should be: "[1, 5) [10, 20)"
rl.add([20, 21]);
rl.toString(); // Should be: "[1, 5) [10, 21)"
rl.add([2, 4]);
rl.toString(); // Should be: "[1, 5) [10, 21)"
rl.add([3, 8]);
rl.toString(); // Should be: "[1, 8) [10, 21)"
rl.remove([10, 10]);
rl.toString(); // Should be: "[1, 8) [10, 21)"
rl.remove([10, 11]);
rl.toString(); // Should be: "[1, 8) [11, 21)"
rl.remove([15, 17]);
rl.toString(); // Should be: "[1, 8) [11, 15) [17, 21)"
rl.remove([3, 19]);
rl.toString(); // Should be: "[1, 3) [19, 21)"
