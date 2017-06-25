const assert = require('assert');
const mainModule = require('./index');

describe('main module', function () {
  it('will add up the two parameters', function () {
    assert.equal(mainModule(1, 1), 2);
  });

  it('joins strings', function () {
    assert.equal(mainModule('1', 1), '11');
  });
});
