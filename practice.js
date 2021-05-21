function centuryFromYear(year) {
  var num = year.toString();
  if (num.length < 3 || num === "100") {
    return 1;
  } else if (num.length === 3) {
    if (num[1] === "0" && num[2] === "0") {
      return parseInt(num[0]);
    } else {
      return parseInt(num[0]) + 1;
    }
  } else if (num.length === 4) {
    if (num[2] === "0" && num[3] === "0") {
      return parseInt(num[0] + num[1]);
    } else {
      return parseInt(num[0] + num[1]) + 1;
    }
  }
}
// console.log(centuryFromYear(68));
// console.log(centuryFromYear(768));
// console.log(centuryFromYear(1668));
// console.log(centuryFromYear(1600));
// console.log(centuryFromYear(100));
// console.log(centuryFromYear(1660));
// console.log(centuryFromYear(600));

function checkPalindrome(inputString) {
  return inputString === inputString.split("").reverse().join("") ? true : false;
}
console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abaac"));
console.log(checkPalindrome("a"));

function adjacentElementsProduct(inputArray) {
  var largestProduct = inputArray[0] * inputArray[1];
  var i = 1;
  while (i < inputArray.length) {
    var number = inputArray[i] * inputArray[i + 1];
    if (number > largestProduct) {
      largestProduct = number;
    }
    i++;
  }
  return largestProduct;
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

function shapeArea(n) {
  var sum = 1;
  var j = 0;
  for (var i = 1; i < n; i++) {
    sum += 4 + j;
    j = j + 4;
  }
  return sum;
}
console.log(shapeArea(7));