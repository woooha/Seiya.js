var assert = require("assert")

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 wher the value is not present', function(){
      assert.equal(-1, [1, 2, 3].indexOf(5))
      assert.equal(-1, [1, 2, 3].indexOf(0))
    })
  })
})