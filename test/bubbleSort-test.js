const assert = require('chai').assert
const sort = require('../bubbleSort')

describe('bubble sort', function() {
  it('can sort an array', function(){
    assert.deepEqual(sort([4,2,5,1,3]), [1,2,3,4,5])
  });
});
