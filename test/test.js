var assert = require('assert');
var RangeList = require('../src/RangeList').RangeList;

describe('RangeList', function() {
  describe('add()', function() {

    it('Should return: [1, 5)', function() {
      var rl = new RangeList();
      rl.add([1, 5]);
      assert.strictEqual(rl.toString(), `[1, 5)`);
    });


    it('Should return: [1, 5) [10, 20)', function() {
      var rl = new RangeList();
      rl.add([1, 5]);
      rl.add([10, 20]);
      assert.strictEqual(rl.toString(), `[1, 5) [10, 20)`);
    });


    it('Should return: [1, 5) [10, 20)', function() {
      var rl = new RangeList();
      rl.add([1, 5]);
      rl.add([10, 20]);
      rl.add([20, 20]);
      assert.strictEqual(rl.toString(), `[1, 5) [10, 20)`);
    });


    it('Should return: [1, 5) [10, 21)', function() {
      var rl = new RangeList();
      rl.add([1, 5]);
      rl.add([10, 20]);
      rl.add([20, 20]);
      rl.add([20, 21]);
      assert.strictEqual(rl.toString(), `[1, 5) [10, 21)`);
    });


    it('Should return: [1, 5) [10, 21)', function() {
      var rl = new RangeList();
      rl.add([1, 5]);
      rl.add([10, 20]);
      rl.add([20, 20]);
      rl.add([20, 21]);
      rl.add([2, 4]);
      assert.strictEqual(rl.toString(), `[1, 5) [10, 21)`);
    });


    it('Should return: [1, 8) [10, 21)', function() {
      var rl = new RangeList();
      rl.add([1, 5]);
      rl.add([10, 20]);
      rl.add([20, 20]);
      rl.add([20, 21]);
      rl.add([2, 4]);
      rl.add([3, 8]);
      assert.strictEqual(rl.toString(), `[1, 8) [10, 21)`);
    });
  });


  describe('remove()', function() {

    it('Should return: [1, 8) [10, 21)', function() {
      var rl = new RangeList();
      rl.add([1, 5]);
      rl.add([10, 20]);
      rl.add([20, 20]);
      rl.add([20, 21]);
      rl.add([2, 4]);
      rl.add([3, 8]);
      rl.remove([10, 10]);
      assert.strictEqual(rl.toString(), `[1, 8) [10, 21)`);
    });


    it('Should return: [1, 8) [11, 21)', function() {
      var rl = new RangeList();
      rl.add([1, 5]);
      rl.add([10, 20]);
      rl.add([20, 20]);
      rl.add([20, 21]);
      rl.add([2, 4]);
      rl.add([3, 8]);
      rl.remove([10, 10]);
      rl.remove([10, 11]);
      assert.strictEqual(rl.toString(), `[1, 8) [11, 21)`);
    });


    it('Should return: [1, 8) [11, 15) [17, 21)', function() {
      var rl = new RangeList();
      rl.add([1, 5]);
      rl.add([10, 20]);
      rl.add([20, 20]);
      rl.add([20, 21]);
      rl.add([2, 4]);
      rl.add([3, 8]);
      rl.remove([10, 10]);
      rl.remove([10, 11]);
      rl.remove([15, 17]);
      assert.strictEqual(rl.toString(), `[1, 8) [11, 15) [17, 21)`);
    });


    it('Should return: [1, 3) [19, 21)', function() {
      var rl = new RangeList();
      rl.add([1, 5]);
      rl.add([10, 20]);
      rl.add([20, 20]);
      rl.add([20, 21]);
      rl.add([2, 4]);
      rl.add([3, 8]);
      rl.remove([10, 10]);
      rl.remove([10, 11]);
      rl.remove([15, 17]);
      rl.remove([3, 19]);
      assert.strictEqual(rl.toString(), `[1, 3) [19, 21)`);
    });   
  });
});