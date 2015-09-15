describe('createNumberArray', function() {
  it("Create an array from 2 to N", function() {
    expect(createNumberArray(3)).to.eql([2, 3]);
  });
});

describe('removeMupltiplesFromArray', function() {
  it("Sets all mupltiples of n to -1", function() {
    expect(removeMupltiplesFromArray(3, [2, 3, 4, 5, 6, 7, 8])[1]).to.eql(-1);
    expect(removeMupltiplesFromArray(3, [2, 3, 4, 5, 6, 7, 8])[2]).to.eql(4);
  });
});
