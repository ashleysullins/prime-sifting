var createNumberArray = function(number) {
  var numberArray = [];
  for (var i = 2; i <= number; i++ ) {
    numberArray.push(i);
  }
  return numberArray;
}

var removeMupltiplesFromArray = function(prime, numArray) {
  var count = 1;
  while(count * prime <= numArray.length - 2) {
    numArray[prime * count - 2] = -1;
    count++;
  }
  return numArray;
}
