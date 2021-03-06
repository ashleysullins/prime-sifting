var createNumberArray = function(number) {
  var numberArray = [];
  for (var i = 2; i <= number; i++ ) {
    numberArray.push(i);
  }
  return numberArray;
}

var removeMultiplesFromArray = function(prime, numArray) {
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

var findPrimes = function(number) {
  var numArray = createNumberArray(number);
  var nextNum = 1;

  while(nextNum <= number) {
    nextNum = findNextPrimeNumber(nextNum, numArray);
    numArray = removeMultiplesFromArray(nextNum, numArray);
  }
  return numArray;
}

var outputPrimeNumbers = function(numArray) {
  var output = [];
  for (var i = 0; i < numArray.length; i++ ) {
    if (numArray[i] != -1) {
      // output = output.concat(" ");
      output.push(numArray[i]);
    }
  }
  return output;
}

$(document).ready(function() {
  $(".results").hide();

  $("form#generator").submit(function() {
    $(".number-display").remove();
    var userNumber = parseInt($("input#number").val());
    var numArray =  createNumberArray(userNumber);

    var count = 2;
    var index = 0;
    var addClassString = "number-display number-display";


    numArray.forEach(function(entry) {

      $(".results").append("<div>" + entry + "</div>").fadeIn(1000);
      $(".results div:gt("+ index + ")").addClass(addClassString + count);
      count++;
      index++;
    });
    $(".results").show();

    var primes = findPrimes(userNumber);

    primes.forEach(function(entry) {
      $(".results").find(".number-display" + entry).css("background-color", "red");
    });
    event.preventDefault();
  });
});
