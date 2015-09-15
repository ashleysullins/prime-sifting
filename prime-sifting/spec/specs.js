describe('createNumberArray', function() {
  it("Create an array from 2 to N", function() {
    expect(createNumberArray(3)).to.eql([2, 3]);
  });
});

describe('removeMultiplesFromArray', function() {
  it("Sets all multiples of n to -1", function() {
    expect(removeMupltiplesFromArray(3, [2, 3, 4, 5, 6, 7, 8])[4]).to.eql(-1);
    expect(removeMupltiplesFromArray(3, [2, 3, 4, 5, 6, 7, 8])[2]).to.eql(4);
  });
});

describe('findNextPrimeNumber', function() {
  it("Find next prime number if number given is not a prime number", function() {
    expect(findNextPrimeNumber(7, [2, 3, -1, 5, -1, 7, -1, -1, -1, 11])).to.eql(11);
  });
});
