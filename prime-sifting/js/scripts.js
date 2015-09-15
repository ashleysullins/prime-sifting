var createNumberArray = function(number) {
  var numberArray = [];
  for (var i = 2; i <= number; i++ ) {
    numberArray.push(i);
  }
  return numberArray;
}

var removeMupltiplesFromArray = function(prime, numArray) {
  var count = 2;
  while((count * prime) <= (numArray.length + 1)) {
    numArray[(prime * count) - 2] = -1;
    count++;
  }
  return numArray;
}

var findNextPrimeNumber = function(number, numArray) {
  var arrayPosition = number - 1;
  var currentNumber = numArray[arrayPosition];
  while(currentNumber === -1) {
    arrayPosition++;
    currentNumber = numArray[arrayPosition];
  }
  return currentNumber;
}
