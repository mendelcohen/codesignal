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
// console.log(checkPalindrome("aabaa"));
// console.log(checkPalindrome("abaac"));
// console.log(checkPalindrome("a"));

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
// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

function shapeArea(n) {
  var sum = 1;
  var j = 0;
  for (var i = 1; i < n; i++) {
    sum += 4 + j;
    j = j + 4;
  }
  return sum;
}
// console.log(shapeArea(7));

function makeArrayConsecutive2(statues) {
  var statues1 = statues.length - 2;
  var numStatues = Math.max(...statues) - (Math.min(...statues) + 1);
  var amountStatues = numStatues - statues1;
  return amountStatues;
}
// console.log(makeArrayConsecutive2([6, 2, 3, 8]));



function almostIncreasingSequence(seq) {
  var bad = 0;
  for (var i=1;i<seq.length;i++) {
    if (seq[i] <= seq[i-1]) {
      bad++;
    } if(bad>1) {
      return false;
    } if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) {
      console.log(seq[i+1]);
      return false;
    }
  }
  return true;
}
// console.log(almostIncreasingSequence([1, 3, 2, 1]));
// console.log(almostIncreasingSequence([1, 2, 1, 2]));
// console.log(almostIncreasingSequence([1, 2, 5, 3, 5]));



function matrixElementsSum(matrix) {
  var free = [];
  var sum = 0;
  for (var row = 0; row < matrix.length; row++) {
    for (var col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        free.push(col);
      } else if (!free.includes(col)) {
        sum += matrix[row][col];
      }
    }
  }    
  return sum;
}
// console.log(matrixElementsSum([[1, 1, 1, 0], 
//   [0, 5, 0, 1], 
//   [2, 1, 3, 10]]));



// function allLongestStrings(inputArray) {
//   var longestStrings = [];
//   var length = inputArray[0].length;
//   for (var str = 1; str < inputArray.length; str++) {
//     if (inputArray[str].length >= length) {
//       length = inputArray[str].length;
//     }
//   }
//   inputArray.forEach(str => {
//     if (str.length === length) {
//       longestStrings.push(str);
//     }
//   });
//   return longestStrings;
// }  
// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));


function commonCharacterCount(s1, s2) {
  var commonCharacters = 0;
  var array1 = s1.split("");
  var array2 = s2.split("");
  for (var char1 = 0; char1 < array1.length; char1++) {
      for (var char2 = 0; char2 < array2.length; char2++) {
          if (array1[char1] === array2[char2]) {
              commonCharacters++;
              array2.splice(char2, 1);
              break;
          }
      }
  }
  return commonCharacters;
}
// console.log(commonCharacterCount("aabcc", "adcaa"));