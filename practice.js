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
  for (var i = 1; i < seq.length; i++) {
    if (seq[i] <= seq[i - 1]) {
      bad++;
    } if (bad > 1) {
      return false;
    } if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) {
      console.log(seq[i + 1]);
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

function isLucky(n) {
  var numbersArray = n.toString().split("");
  var halfDigits = numbersArray.length / 2;
  var firstSum = 0;
  var secondSum = 0;
  var index = 0;
  while (index < halfDigits) {
    firstSum += parseInt(numbersArray[index]);
    secondSum += parseInt(numbersArray[index + halfDigits]);
    index++;
  }
  return firstSum === secondSum ? true : false;
}
// console.log(isLucky(1230));



function sortByHeight(a) {
  var s = a.filter(h => h > 0).sort((a, b) => a - b);
  console.log(s);
  return a.map(p => {
    if (p !== -1) {
      return s.shift();
    } else if (p === -1) {
      return -1;
    }
  });
}
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

// function reverseInParentheses(inputString) {
//   var string = "";
//   var i = 0;
//   while (i < inputString.length) {
//     if (inputString[i] === "(") {
//       var openPar = i;
//     } else if (inputString[i] === ")") {
//       var closePar = i;
//     }
//     i++;
//   }
//   var stringInPar = inputString.substr(openPar + 1, closePar - (openPar + 1))
//   var newStringInPar = stringInPar.split("").reverse().join("");
//   string = inputString.replace(stringInPar, newStringInPar);
//   return string;
// }  
// console.log(reverseInParentheses("(bar)"));     



// function reverseInParentheses(inputString) {
//   while (inputString.includes('(')) {
//     inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
//   }
//   return inputString;
// }
// console.log(reverseInParentheses("foo(bar)baz(blim)"));
// console.log(reverseInParentheses("foo(bar(baz))blim"));


function reverseInParentheses(inputString) {
  while (inputString.includes('(')) {
    inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str]);
  }
  return inputString;
}
// console.log(reverseInParentheses("foo(bar)baz(blim)"));
// console.log(reverseInParentheses("foo(bar(baz))blim"));

function alternatingSums(a) {
  var weightsTeamOne = 0;
  var weightsTeamTwo = 0;
  for (var i = 0; i < a.length; i += 2) {
    weightsTeamOne += a[i];
    if (i + 1 < a.length) {
      weightsTeamTwo += a[i + 1];
    }
  }
  var weightsTotals = [];
  weightsTotals.push(weightsTeamOne);
  weightsTotals.push(weightsTeamTwo);
  return weightsTotals;
}
// console.log(alternatingSums([50, 60, 60, 45, 70]));



function addBorder(picture) {
  for (var string = 0; string < picture.length; string++) {
    picture[string] = `*${picture[string]}*`;
  }
  picture.unshift("*".repeat(picture[0].length));
  picture.push("*".repeat(picture[0].length));
  return picture;
}
// console.log(addBorder(["abc", "ded"]));


var array1 = [4, 8, 10, 9];
var array2 = [4, 8, 9, 10];

var isSame = (array1.length === array2.length) && array1.every(function (element, index) {
  return element === array2[index];
});

// console.log(isSame);


function areSimilar(a, b) {
  var c = a.map(a => a);
  var d = b.map(a => a);
  if (c.sort().join("") === d.sort().join("")) {
    var sumNotEqual = 0;
    for (var twoArrays = 0; twoArrays < a.length; twoArrays++) {
      if (a[twoArrays] !== b[twoArrays]) {
        sumNotEqual++;
        console.log(sumNotEqual);
      }
    }
    console.log(sumNotEqual);
    return sumNotEqual < 3 ? true : false;
  }
  return false;
}
// console.log(areSimilar([4, 6, 3], [3, 4, 6]));



function arrayChange(inputArray) {
  var count = 0;
  for (var index = 1; index < inputArray.length; index++) {
    if (inputArray[index] <= inputArray[index - 1]) {
      var increments = (inputArray[index - 1] - inputArray[index]) + 1;
      count += increments;
      inputArray[index] = inputArray[index - 1] + 1;
    }
  }
  return count;
}
// console.log(arrayChange([1, 6, 2, 9, 1]));



function palindromeRearranging(inputString) {
  var letterCounts = {};
  for (var index = 0; index < inputString.length; index++) {
    if (letterCounts[inputString[index]]) {
      letterCounts[inputString[index]]++;
    } else {
      letterCounts[inputString[index]] = 1;
    }
  }
  var odds = 0;
  for (const property in letterCounts) {
    if (letterCounts[property] % 2 !== 0) {
      odds++;
    }
  }
  return odds < 2 ? true : false;
}
// console.log(palindromeRearranging("aabbc"));
// console.log(palindromeRearranging("aabb"));



function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  var yourArray = [];
  var friendsArray = [];
  yourArray.push(yourLeft);
  yourArray.push(yourRight);
  friendsArray.push(friendsLeft);
  friendsArray.push(friendsRight);
  yourArray.sort();
  friendsArray.sort();
  return yourArray[0] === friendsArray[0] && yourArray[1] === friendsArray[1] ? true : false;
}
// console.log(areEquallyStrong(10, 15, 15, 10));
// console.log(areEquallyStrong(20, 15, 15, 10));


// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(object["a"]);
// }

function arrayMaximalAdjacentDifference(inputArray) {
  var greatestDifference = Math.abs(inputArray[0] - inputArray[1]);
  for (var num = 1; num < inputArray.length - 1; num++) {
    var outcome = Math.abs(inputArray[num] - inputArray[num + 1]);
    if (outcome > greatestDifference) {
      greatestDifference = outcome;
    }
  }
  return greatestDifference;
}
// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));


// var address = "172.16.254.1";
// console.log(address.split("."));

// console.log(parseInt("02"));

function isIPv4Address(inputString) {
  var addressParts = inputString.split(".");
  var validNum = 0;

  if (addressParts.length === 4) {
    for (var part = 0; part < addressParts.length; part++) {
      if (addressParts[part].length > 1 && addressParts[part][0] === "0") {
        return false;
      } else if (!isNaN(addressParts[part]) && parseInt(addressParts[part]) >= 0 && parseInt(addressParts[part]) < 256) {
        validNum++;
      }
    }
  }
  return validNum === 4 ? true : false;
}
// console.log(isIPv4Address("0.254aa.255.0"));



function avoidObstacles(inputArray) {
  var numbers = inputArray.sort();
  var n = 2;
  var num = 0;
  while (num < numbers.length) {
    if (numbers[num] % n === 0) {
      n++;
      num = 0;
    } else {
      num++;
    }
  }
  return n;
}
// console.log(avoidObstacles([999, 1000]));



function boxBlur(image) {
  var blurArray = [];
  var index1 = 0;
  var index2 = 0;
  while (image.length - index1 >= 3) {
    var pixel = [];
    index2 = 0;
    while (image[0].length - index2 >= 3) {
      var sumTotal = 0;
      for (var i = index1; i < index1 + 3; i++) {
        for (var j = index2; j < index2 + 3; j++) {
          sumTotal += image[i][j];
        }
      }
      sumTotal = Math.floor(sumTotal / 9);
      pixel.push(sumTotal);
      index2++;
    }
    blurArray.push(pixel);
    index1++;
  }
  return blurArray;
}
// console.log(boxBlur([
//   [7, 4, 0, 1], 
//   [5, 6, 2, 2], 
//   [6, 10, 7, 8], 
//   [1, 4, 2, 0]]
// ));



// function minesweeper(matrix) {
//   for (var row = 0; row < matrix.length; row++) {
//     for (var column = 0; column < matrix[row].length; column++) {
//       if (matrix[row][column] === false) {
//         matrix[row][column] = 0;
//       } else if (matrix[row][column] === true) {
//         if (column > 0) {
//           if (matrix[row][column - 1] === false || matrix[row][column - 1] === true) {
//             matrix[row][column - 1] = 1;
//           } else if (matrix[row][column - 1] >= 0) {
//             matrix[row][column - 1]++;
//           }
//         }
//         if (column < matrix[row].length - 1) {
//           if (matrix[row][column + 1] === false || matrix[row][column + 1] === true) {
//             matrix[row][column + 1] = 1;
//           } else if (matrix[row][column + 1] >= 0) {
//             matrix[row][column + 1]++;
//           }
//         }
//         if (row < matrix.length - 1) {
//           if (matrix[row + 1][column] === false || matrix[row + 1][column] === true) {
//             matrix[row + 1][column] = 1;
//           } else if (matrix[row + 1][column] >= 0) {
//             matrix[row + 1][column]++;
//           }
//         }

//         if (row > 0 && row < matrix.length - 1) {
//           if (matrix[row - 1][column] === false || matrix[row - 1][column] === true) {
//             matrix[row - 1][column] = 1;
//           } else if (matrix[row - 1][column] >= 0) {
//             matrix[row - 1][column]++;
//           }

//           if (matrix[row - 1][column - 1] === true) {
//             matrix[row - 1][column - 1] = true;
//           } else if (matrix[row - 1][column - 1] === false) {
//             matrix[row - 1][column - 1] = 1;
//           } else if (matrix[row - 1][column - 1] >= 0) {
//             matrix[row - 1][column - 1]++;
//           }

//           if (matrix[row - 1][column + 1] === false) {
//             matrix[row - 1][column + 1] = 1;
//           } else if (matrix[row - 1][column + 1] >= 0) {
//             matrix[row - 1][column + 1]++;
//           }
//           if (matrix[row + 1][column - 1] === false) {
//             matrix[row + 1][column - 1] = 1;
//           } else if (matrix[row + 1][column - 1] >= 0) {
//             matrix[row + 1][column - 1]++;
//           }
//           if (matrix[row + 1][column + 1] === false) {
//             matrix[row + 1][column + 1] = 1;
//           } else if (matrix[row + 1][column + 1] >= 0) {
//             matrix[row + 1][column + 1]++;
//           }
//         }
//       }
//     }
//   }
// matrix.forEach(subArray => {
//   var index = subArray.indexOf(true);
//   if (index !== -1) {
//     subArray[index] = 1;
//   }
// });
//   return matrix;
// }
// console.log(minesweeper([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
// ]));
// console.log(minesweeper([
//   [true,false,false,true], 
//   [false,false,true,false], 
//   [true,true,false,true]
// ]));
// console.log(minesweeper([
//   [true,true,true], 
//   [true,true,true], 
//   [true,true,true]
// ]));



// const directions = [
//   [ 1,-1], [ 1, 0], [ 1, 1],
//   [ 0,-1],          [ 0, 1],
//   [-1,-1], [-1, 0], [-1, 1]
// ];

// const minesweeper = matrix => matrix.map((row, y) => row.map((col, x) => directions.reduce((count, i) => count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]]), 0)));
// console.log(minesweeper([
//   [true,false,false], 
//   [false,true,false], 
//   [false,false,false]
// ]));

var dirs = [{ r: -1, c: -1 },
{ r: -1, c: 0 },
{ r: -1, c: 1 },
{ r: 0, c: 1 },
{ r: 0, c: -1 },
{ r: 1, c: -1 },
{ r: 1, c: 0 },
{ r: 1, c: 1 }];

function minesweeper(matrix) {
  return matrix.map((a, r) => a.map((_, c) => dirs.reduce((p, v) => p += (matrix[r + v.r] || [])[c + v.c] | 0, 0)))
}

// console.log(minesweeper([
//   [true,false,false], 
//   [false,true,false], 
//   [false,false,false]
// ]));
var n = 246;
var digitsArray = n.toString().split('');
console.log(digitsArray);
for (var i = 0; i < digitsArray.length; i++) {
  if (digitsArray[i] % 2 !== 0) {
    var response = "false";
  }
}
console.log(response === "false" ? false : true);

