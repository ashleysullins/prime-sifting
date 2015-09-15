describe('createNumberArray', function() {
  it("Create an array from 2 to N", function() {
    expect(createNumberArray(3)).to.eql([2, 3]);
  });
});

describe('removeMultiplesFromArray', function() {
  it("Sets all multiples of n to -1", function() {
    expect(removeMultiplesFromArray(3, [2, 3, 4, 5, 6, 7, 8])[4]).to.eql(-1);
    expect(removeMultiplesFromArray(3, [2, 3, 4, 5, 6, 7, 8])[2]).to.eql(4);
  });
});

describe('findNextPrimeNumber', function() {
  it("Find next prime number if number given is not a prime number", function() {
    expect(findNextPrimeNumber(7, [2, 3, -1, 5, -1, 7, -1, -1, -1, 11])).to.eql(11);
  });
});

describe('findPrimes', function() {
  it("Return array where only prime numbers have a value > 0", function() {
    expect(findPrimes(8)).to.eql([2, 3, -1, 5, -1, 7, -1]);
  });
});

describe('outputPrimeNumbers', function(){
  it("Will output a string of only prime numbers", function() {
    expect(outputPrimeNumbers([2, 3, -1, 5, -1, 7, -1])).to.equal(" 2 3 5 7");
  });
});
