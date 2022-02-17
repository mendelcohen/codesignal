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
// console.log(digitsArray);
for (var i = 0; i < digitsArray.length; i++) {
  if (digitsArray[i] % 2 !== 0) {
    var response = "false";
  }
}
// console.log(response === "false" ? false : true);

function variableName(name) {

  var array = name.split("");
  var index = 0;
  while (index < array.length) {
    if (index === 0) {
      if ((/[a-zA-Z]/).test(array[index]) || array[index] === "_") {
        index++;
      } else {
        return false;
      }
    } else if (index > 0 && (/[a-zA-Z]/).test(array[index]) || array[index] === "_" || (/\d/).test(array[index])) {
      index++;
    } else {
      return false;
    }
  }
  return true;
}
// console.log(variableName("1now7"));
// var hasNumber = /\d/;
// console.log(hasNumber.test("ABC33SDF"));  //true
// console.log(hasNumber.test("ABCSDF"));

function alphabeticShift(inputString) {
  var alphabet = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z"
  };
  var newString = "";
  for (var i = 0; i < inputString.length; i++) {
    for (var j in alphabet) {
      if (inputString[i] === alphabet[26]) {
        newString += alphabet[1];
        break;
      } else if (inputString[i] === alphabet[j]) {
        newString += alphabet[parseInt(j) + 1];
      }
    }
  }
  return newString;
}
// console.log(alphabeticShift("zcrazzz"));

function chessBoardCellColor(cell1, cell2) {
  if (cell1[0] === "A" || cell1[0] === "C" || cell1[0] === "E" || cell1[0] === "G") {
    if (cell2[0] === "A" || cell2[0] === "C" || cell2[0] === "E" || cell2[0] === "G") {
      if (parseInt(cell1[1]) % 2 !== 0 && parseInt(cell2[1]) % 2 !== 0 || parseInt(cell1[1]) % 2 === 0 && parseInt(cell2[1]) % 2 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      if (parseInt(cell1[1]) % 2 !== 0 && parseInt(cell2[1]) % 2 !== 0 || parseInt(cell1[1]) % 2 === 0 && parseInt(cell2[1]) % 2 === 0) {
        return false;
      } else {
        return true;
      }
    }
  } else {
    if (cell1[0] === "B" || cell1[0] === "D" || cell1[0] === "F" || cell1[0] === "H") {
      if (cell2[0] === "B" || cell2[0] === "D" || cell2[0] === "F" || cell2[0] === "H") {
        if (parseInt(cell1[1]) % 2 !== 0 && parseInt(cell2[1]) % 2 !== 0 || parseInt(cell1[1]) % 2 === 0 && parseInt(cell2[1]) % 2 === 0) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
}
// console.log(chessBoardCellColor("B3", "H8"));
// console.log(chessBoardCellColor("A1", "B3"));
// console.log(chessBoardCellColor("A1", "C2"));
// console.log(chessBoardCellColor("A1", "C3"));

// function chessBoardCellColor(cell1, cell2) {
//   let board = {
//     "A": 1,
//     "B": 2,
//     "C": 3,
//     "D": 4,
//     "E": 5,
//     "F": 6,
//     "G": 7,
//     "H": 8
//   };
//   const total1 = board[cell1[0]] + parseInt(cell1[1]);
//   const total2 = board[cell2[0]] + parseInt(cell2[1]);
//   return total1 % 2 === total2 % 2;
// }

// function chessBoardCellColor(cell1, cell2) {
//   return (cell1.charCodeAt(0) + Number(cell1[1]) + cell2.charCodeAt(0) + Number(cell2[1])) % 2 === 0;
// }
// console.log(chessBoardCellColor("B3", "H8"));
// console.log(chessBoardCellColor("A1", "B3"));
// console.log(chessBoardCellColor("A1", "C2"));
// console.log(chessBoardCellColor("A1", "C3"));


// You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.

function depositProfit(deposit, rate, threshold) {
  let yearNumber = 0;
  while (deposit < threshold) {
    deposit += deposit * (rate / 100);
    yearNumber++;
  }
  return yearNumber;
}
// console.log(depositProfit(100, 20, 170));

function absoluteValuesSumMinimization(a) {
  let minimizer = a[0];
  let minArray = a.map(num => Math.abs(num - minimizer));
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  let lowestSum = minArray.reduce(reducer);

  for (var i = 1; i < a.length; i++) {
    let minArray = a.map(num => Math.abs(num - a[i]));
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    let sum = minArray.reduce(reducer);
    if (sum < lowestSum) {
      lowestSum = sum;
      minimizer = a[i];
    }
  }
  return minimizer;
}
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 5, 19]));

// if (absoluteValuesSumMinimization([2, 4, 7, 6, 5, 19]) === 6) {
//   console.log("PASSED");
// } else {
//   console.log("FAILED");
// }

// function stringsRearrangement(inputArray) {
  
  // loops through array to re-order as many times as length of array
  // for (var loop = 0; loop < inputArray.length; loop++) {
    
  //   var i = 1;
    // loops through array to re-order once
    // while (i < inputArray.length) {
      
     
      
    //   var b = inputArray[i];
    //   var a = inputArray[i - 1];
    //   inputArray[i] = a;
    //   inputArray[i - 1] = b;
      // var newArray = inputArray.map(x => x);
      // console.log(inputArray);
      // console.log(inputArray);
      //loops through array to compare each value
      // var counterArray = [];
      // for (var j = 1; j < inputArray.length; j++) {
      //   var counter = 0;
        
      //   for (var x = 0; x < inputArray[j].length; x++) {
      //     // change comparison to iterate through both strings and delete if same, then increase 
      //     if (!inputArray[j - 1].includes(inputArray[j].charAt(x))) {
            
      //       console.log(inputArray[j].charAt(x));
      //       counter++; 
      //       console.log(counter);
      //     }
          // } else {
          //   inputArray[j - 1] = inputArray[j - 1].replace(inputArray[j].charAt(x), '');
          //   console.log(inputArray[j].charAt(x));
          // }
          // console.log(newArray);
        // }
        // for (var x = 0; x < inputArray[j - 1].length; x++) {
        //   // change comparison to iterate through both strings and delete if same, then increase 
        //   if (inputArray[j - 1].charAt(x) !== inputArray[j].charAt(x)) {
        //     console.log(inputArray[j - 1].charAt(x));
        //     console.log(inputArray[j].charAt(x));
        //     counter++; 
        //     console.log(counter);
        //   } 
        // }
      //   counterArray.push(counter);
        
      //   if (counter > 1 || counter < 1) {
          
      //     console.log("break");
      //     break;
      //   }
        
      // }
      // console.log(counterArray);
      // const reducer = (previousValue, currentValue) => previousValue + currentValue;
      // if (counterArray.reduce(reducer) === counterArray.length) {
      //   return true;
      // } else {
      //   i++;
      // }

      // if (counterArray.some(el => el > 1 )) {
      //   i++;
      // } else {
      //   return true;
      // }
      // console.log(inputArray);
    //   i++;
    // }
    
    // return counter === 1 ? true : false;
//   } 
//   return false; 
// }
// console.log(stringsRearrangement(["abc", 
// "bef", 
// "bcc", 
// "bec", 
// "bbc", 
// "bdc"]));

// if (stringsRearrangement(["abc", 
// "bef", 
// "bcc", 
// "bec", 
// "bbc", 
// "bdc"]) === true) {
//   console.log("PASSED");
// } else {
//   console.log("FAILED");
// }

// iterate through array to create all different possible orders
// move first value up to end of array in increments

// at each stop iterate through array to compare

function extractEachKth(inputArray, k) {
  var newArray = [];
  var i = 0;
  while (i < inputArray.length) {
    if ((i + 1) % k === 0) {
      i++;
    } else {
      newArray.push(inputArray[i]);
      i++;
    }
  }
  return newArray;
}
// console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
// if (extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2) === [1, 3, 5, 7, 9]) {
//   console.log("PASSED");
// } else {
//   console.log("FAILED");
// }


function firstDigit(inputString) {
  
  return inputString.match(/\d+/)[0];
  
}
// console.log(firstDigit("var_1__Int"));
// console.log(firstDigit("q2q-q"));

function differentSymbolsNaive(s) {
  var array = [];
  var i = 0;
  while (i < s.length) {
    if (array.some(el => el === s.charAt(i))) {
      i++;
    } else {
      array.push(s.charAt(i));
      i++;
    }
  }
  return array.length;
}
// console.log(differentSymbolsNaive("cabca"));
// console.log(differentSymbolsNaive("cabcab"));

// function arrayMaxConsecutiveSum(inputArray, k) {
  // var largestSum = inputArray[0];
  // for (var i = 0; i <= inputArray.length - k; i++) {
  //   var sum = 0;
  //   for (var j = i; j < i + k; j++) {
  //     console.log(inputArray[j]);
  //     sum += inputArray[j];
  //   }
  //   // console.log(sum);
  //   if (sum > largestSum) {
  //     largestSum = sum;
  //   }
  // }
  // return largestSum;
// }
// console.log(arrayMaxConsecutiveSum([1, 2, 3, 4, 2], 2));
// console.log(arrayMaxConsecutiveSum([1, 2, 3, 4, 2], 4));

function arrayMaxConsecutiveSum(inputArray, k) {
  var largestSum = inputArray[0];
  for (var i = 0; i <= inputArray.length - k; i++) {
    var sum = inputArray.slice(i, i + k).reduce((val1, val2) => val1 + val2);
    if (sum > largestSum) {
      largestSum = sum;
    }
  }
  return largestSum;
}
// console.log(arrayMaxConsecutiveSum([1, 2, 3, 4, 2], 2));
// console.log(arrayMaxConsecutiveSum([1, 2, 3, 4, 2], 4));

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  return desiredHeight < upSpeed ? 1 : Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed) + 1);
}
// console.log(growingPlant(20, 10, 100));
// console.log(growingPlant(100, 10, 910));
// console.log(growingPlant(100, 10, 920));
// console.log(growingPlant(10, 9, 4));
// console.log(growingPlant(10, 9, 15));

// function knapsackLight(value1, weight1, value2, weight2, maxW) {
//   var items = [weight1, weight2, weight1 + weight2];
//   var values = [value1, value2, value1 + value2];
//   var maxV = 0;
//   for (var i = 0; i < items.length; i++) {
//     if (items[i] <= maxW && values[i] > maxV) {
//       console.log(values[i]);
//       maxV = values[i];
//       console.log(maxV);
//     } 
//   }
//   return maxV;
// }
// console.log(knapsackLight(10, 2, 11, 3, 6));
// console.log(knapsackLight(10, 5, 6, 4, 8));

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  return Math.max(
    maxW >= weight1 && value1,
    maxW >= weight2 && value2, 
    maxW >= weight1 + weight2 && value1 + value2
  );
}
// console.log(knapsackLight(10, 2, 11, 3, 6));
// console.log(knapsackLight(10, 5, 6, 4, 8));

// function longestDigitsPrefix(inputString) {
//   console.log(parseInt(inputString.charAt(0)));

//   if (console.log(parseInt(inputString.charAt(0)) === "NaN")) {
//     return "";
//   } else if (typeof parseInt(inputString.charAt(0)) === "number") {
//     return inputString.match(/\d+/)[0];
//   } else {
//     return "";
//   }
//   // return typeof parseInt(inputString.charAt(0));
// }
// console.log(longestDigitsPrefix("123aa1"));
// console.log(longestDigitsPrefix("q22q-q"));

function longestDigitsPrefix(inputString) {
  return parseInt(inputString.charAt(0)) - parseInt(inputString.charAt(0)) === 0 ? inputString.match(/\d+/)[0] : "";
}
// console.log(longestDigitsPrefix("123aa1"));
// console.log(longestDigitsPrefix("q22q-q"));

function digitDegree(n) {
  var amount = 0;
  var digit = 1;
  while (digit < `${n}`.length) {
    var total = `${n}`.split('').reduce((a, b) => parseInt(a) + parseInt(b));
    n = total;
    amount++;
  } 
  return amount;
}
// console.log(digitDegree(5));
// console.log(digitDegree(100));
// console.log(digitDegree(91));

function bishopAndPawn(bishop, pawn) {
  // bishop = bishop.split("");
  // pawn = pawn.split("");
  return Math.abs((bishop[0].charCodeAt() - 96) - (pawn[0].charCodeAt() - 96)) === Math.abs(parseInt(bishop[1]) - parseInt(pawn[1])) ? true : false;
}
// console.log(bishopAndPawn("a1", "b2"));
// console.log(bishopAndPawn("a1", "c2"));
// console.log(bishopAndPawn("d4", "c3"));
// console.log(bishopAndPawn("a5", "c3"));
// console.log(bishopAndPawn("a1", "c3"));
// console.log('a'.charCodeAt() - 96);


function isBeautifulString(inputString) {
  var letters = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0};
  for (var i = 0; i < inputString.length; i++) {
    letters[inputString[i]]++;
  }
  var k = 0;
  while (k < 26) {
    if (letters[String.fromCharCode('a'.charCodeAt() + k)] < letters[String.fromCharCode('a'.charCodeAt() + (k + 1))]) {
      return false;
    }
    k++;
  }
  return true;
}
// console.log(isBeautifulString("bbbaacdafe"));

// if (isBeautifulString("aabbb") === false) {
//   console.log("THE CODE PASSES");
// }  else {
//   console.log("THE CODE FAILS");
// }

// if (isBeautifulString("bbbaacdafe") === true) {
//   console.log("THE CODE PASSES");
// }  else {
//   console.log("THE CODE FAILS");
// }

// if (isBeautifulString("bbc") === false) {
//   console.log("THE CODE PASSES");
// }  else {
//   console.log("THE CODE FAILS");
// }

function findEmailDomain(address) {
  return address.split("@").pop();
}
// console.log(findEmailDomain("mmhakohen@gmail.com"));
// console.log(findEmailDomain("chaniekohn@hotmail.com"));


// if (findEmailDomain("mmhakohen@gmail.com") === "gmail.com") {
//   console.log("CODE PASSES");
// } else {
//   console.log("CODE FAILS");
// }

// if (findEmailDomain("chaniekohn@hotmail.com") === "hotmail.com") {
//   console.log("CODE PASSES");
// } else {
//   console.log("CODE FAILS");
// }

// if (findEmailDomain("\"very.unusual.@.unusual.com\"@usual.com") === "usual.com") {
//   console.log("CODE PASSES");
// } else {
//   console.log("CODE FAILS");
// }

// console.log("\"very.unusual.@.unusual.com\"@usual.com".split("@"));

// function solution(st) {
//   if (st.split("").reverse().join("") === st) {
//     return "Palindrome";
//   } else {
//     var array = st.split("");
//     var arrayStr = [];
//     for (var i = 0; i <= (array.length + arrayStr.length) / 2; i++) {
//       if (array[i] === array[array.length - 1]) {
//         var j = i + 1;
//         var k = 2;
//         while (j <= (array.length + arrayStr.length) / 2) {
//           if (array[j] === array[array.length - k]) {
//             j++;
//             k++;
//             if (j >= (array.length + arrayStr.length) / 2) {
//               return arrayStr;
//             }
//           } else {
//             arrayStr.push(array[i]);
//             break;
//           } 
//         } 
//       } else {
//         if (i >= (array.length + arrayStr.length) / 2) {
//           break;
//         } else {
//           arrayStr.push(array[i]);
//         }
//       }
//     }
//   }
//   return arrayStr.length;
// }
// console.log(solution("palilla"));






function solutions(st) {
  var array = st.split("");
  var index = array.length;
  for (var i = 0; i <= array.length / 2; i++) {
    if (array[i] === array[index - 1]) {
      var j = i + 1;
      var k = 2;
      while (j <= array.length / 2) {
        if (array[j] === array[index - k]) {
          j++;
          k++;
          if (j >= array.length / 2) {
            return array.join("");
          }
        } else {
          console.log(array[i]);
          array.splice(index, 0, array[i]);
          break;
        } 
      } 
    } else {
      if (i >= array.length / 2) {
        break;
      } else {
        console.log(array[i]);
        array.splice(index, 0, array[i]);
      }
    }
  }
  return array.join("");
}
// console.log(solution("abcabc"));

function solution(votes, k) {
  var potentialWinners = 0;
  var maxVotes = Math.max(...votes);
  var maxs = 0;
  votes.forEach(num => {
    if (num === maxVotes) {
      maxs++;
    }
  });
  votes.forEach(num => {
    if (num + k > maxVotes) {
      potentialWinners++;
    } else if (k === 0 && maxs === 1 && num + k === maxVotes) {
      potentialWinners++;
    }
  });
  return potentialWinners;
}
// console.log(solution([2, 3, 5, 2], 0));

// if (solution([1, 5, 5, 5], 3) === 3) {
//   console.log("CODE PASSES");
// } else {
//   console.log("FAILED!");
// }

function remainingVotes(votes, k) {
  var max = Math.max(...votes);
  var winners = votes.filter(vote => vote + k > max || vote === max).length;
  return k === 0 ? winners > 1 ? 0 : 1 : winners;
}
// console.log(remainingVotes([2, 3, 5, 2], 4));

function solutione(inputString) {
  var i = 0;
  while (i < inputString.length) {
    if (inputString.length !== 17) {
      return false;
    }
    if ((i + 1) % 3 === 0) {
      console.log(i);
      if (inputString[i] !== "-") {
        return false;
      } else {
        i++;
      }
    } else {
      if (inputString[i] === "0" || inputString[i] === "1" || inputString[i] === "2" || inputString[i] === "3" || inputString[i] === "4" || inputString[i] === "5" || inputString[i] === "6" || inputString[i] === "7" || inputString[i] === "8" || inputString[i] === "9" || inputString[i] === "A" || inputString[i] === "B" || inputString[i] === "C" || inputString[i] === "D" || inputString[i] === "E" || inputString[i] === "F") {
        i++;
      } else {
        return false;
      }
    }
    
  }
  return true;
}
// console.log(solutione("00-1B-63-84-45-E6"));
// console.log(solutione("Z1-1B-63-84-45-E6"));
// console.log(solutione("12-34-56-78-9A-BG"));

function ssolution(inputString) {
  if (inputString.length !== 17) {
    return false;
  }
  for (var a = 0; a < inputString.length; a++) {
    if ((a + 1) % 3 === 0 ) {
      if (inputString[a] !== "-") {
        return false;
      }
    } else if (!isCharOfMac(inputString[a])) {
      return false;
    }
  }
  return true;
}

function isCharOfMac(c) {
  var macAdress = "0123456789ABCDEF".split("");
  for (i = 0 ; i < macAdress.length ; i++) {
    if (c === macAdress[i]) {
      return true;
    }
  }
  return false;
}
// console.log(ssolution("00-1B-63-84-45-E6"));
// console.log(ssolution("Z1-1B-63-84-45-E6"));
// console.log(ssolution("12-34-56-78-9A-BG"));

// orders lists
// order has name price rush
// function: print kitchen1 for rush, kitchen 2 for not rush

// function printOrders(orderList) {
//   orderList.forEach(order => {
//     order.rush ? console.log("kitchen1") : console.log("kitchen2");
//   })
// }
// console.log(printOrders([...]));

// list of 2 letter abbrev. us states. some repeated. some missing.
// return object key value (state: number)

// function stateAbbrevAmount(arrayAbbrev) {
//   var abbrevObj = {};
//   arrayAbbrev.forEach(abbrev => {
//     if (abbrevObj[abbrev]) {
//       abbrevObj[abbrev]++;
//     } else {
//       abbrevObj[abbrev] = 1;
//     }
//   });
//   stateList.forEach(state => {
//     if (!abbrevObj.include(state)) {
//       abbrevObj[stateList[state]] = 0;
//     }
//   })
//   return abbrevObj;
// }
// console.log(stateAbbrevAmount[...]);

// function isDigit(symbol) { 
//   return isNaN(parseInt(symbol)) ? false : true; 
// }
// console.log(isDigit(2));
// console.log(isDigit("1"));
// console.log(isDigit("-"));


function isDigit(symbol) { 
  return !isNaN(parseInt(symbol)); 
}
// console.log(isDigit(2));
// console.log(isDigit("1"));
// console.log(isDigit("-"));

function lineEncode(s) {
  var newString = "";
  var newSubstring = "";
  var i = 0;
  while (i < s.length) {
    newSubstring = s[i];
    while (s[i] === s[i + 1]) {   
      newSubstring += s[i];
      i++;
    }
    newSubstring.length === 1 ? newString += newSubstring : newString += (newSubstring.length + s[i]);
    i++;
  }
  return newString;
}
// console.log(lineEncode("aabbbc"));
var code = "hat";
var index = 1;
// console.log(code.charCodeAt(index));

function moveCount(cell) {
  var moves = 2;
  if (cell.charCodeAt(0) - 96 > 2 && cell.charCodeAt(0) - 96 < 7 && parseInt(cell.charAt(1)) > 2 && parseInt(cell.charAt(1)) < 7) {
    moves = 8;
  } else if  (cell.charCodeAt(0) - 96 === 1 || parseInt(cell.charAt(1)) === 1 || cell.charCodeAt(0) - 96 === 8 || parseInt(cell.charAt(1)) === 8) {
    if (Math.abs(parseInt(cell.charAt(1)) - (cell.charCodeAt(0) - 96)) === 1 || Math.abs(parseInt(cell.charAt(1)) - (cell.charCodeAt(0) - 96)) === 6) {
      moves = 3;
    } else if (Math.abs(parseInt(cell.charAt(1)) - (cell.charCodeAt(0) - 96)) > 1 && Math.abs(parseInt(cell.charAt(1)) - (cell.charCodeAt(0) - 96)) < 6) {
      moves = 4;
    }
  } else {
    if (Math.abs(parseInt(cell.charAt(1)) - (cell.charCodeAt(0) - 96)) === 0 || Math.abs(parseInt(cell.charAt(1)) - (cell.charCodeAt(0) - 96)) === 5) {
      moves = 4;
    } else if (Math.abs(parseInt(cell.charAt(1)) - (cell.charCodeAt(0) - 96)) > 0) {
      moves = 6;
    }
  }
  return moves;
}
// console.log(movesCount("b1"));
// console.log(movesCount("b2"));
// console.log(movesCount("b7"));
// console.log(movesCount("b8"));
// console.log(movesCount("a1"));
// console.log(movesCount("c1"));
// console.log(movesCount("d1"));
// console.log(movesCount("c3"));
// console.log(movesCount("c2"));
// console.log(movesCount("c2"));
// console.log(movesCount("h1"));
// console.log(movesCount("b7"));
// console.log(movesCount("b8"));

function movesCount(cell) {
  var moves = 2;

  var a = cell.charCodeAt(0) - 96;
  var b = parseInt(cell.charAt(1));

  if (a > 2 && a < 7 && b > 2 && b < 7) {
    moves = 8;
  } else if (a === 1 || b === 1 || a === 8 || b === 8) {
    if (Math.abs(b) - a === 1 || Math.abs(b - a) === 6) {
      moves = 3;
    } else if (Math.abs(b - a) > 1 && Math.abs(b - a) < 6) {
      moves = 4;
    }
  } else {
    if (Math.abs(b - a) === 0 || Math.abs(b - a) === 5) {
      moves = 4;
    } else if (Math.abs(b - a) > 0) {
      moves = 6;
    }
  }
  return moves;
}
// console.log(movesCount("b1"));
// console.log(movesCount("b2"));
// console.log(movesCount("b7"));
// console.log(movesCount("b8"));
// console.log(movesCount("a1"));
// console.log(movesCount("c1"));
// console.log(movesCount("d1"));
// console.log(movesCount("c3"));
// console.log(movesCount("c2"));
// console.log(movesCount("c2"));
// console.log(movesCount("h1"));
// console.log(movesCount("b7"));
// console.log(movesCount("b8"));



// Delete digit: Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.
// Input: 152, Output should be 52. 
// Input: 1001, Output should be 101.

// iterate through digits
// at each digit delete it 
// construct a number from remaining digits
// assign number to variable maximalNum if > maximalNum
// return maximalNum

function deleteDigit(num) {
  var maximalNum = 0;
  var arrayNum = ("" + num).split('');
 
  for (var i = 0; i < arrayNum.length; i++) {
    
    arrayNum.splice(i, 1);
    var number = parseInt(arrayNum.join(''));
  
    if (number > maximalNum) {
      maximalNum = number;
    }
    arrayNum = ("" + num).split('');
  }
  return maximalNum;
}
// console.log(deleteDigit(222219));
// console.log(deleteDigit(1001));
// const str = 'Life, the universe and everything. Answer:';

// console.log(typeof parseInt(`${str.length}`));
// var text = "Ready, steady, go!";
// console.log(text.split(","));

function longestWord(text) {
  var longestWord = "";
  var word = "";
  for (var i = 0; i < text.length; i++) {
    if (text[i].match(/^[A-Za-z]+$/)) {
      word += text[i];
      if (i === text.length - 1) {
        if (parseInt(`${word.length}`) > `${longestWord.length}`) {
          longestWord = word;
        }
      }
    } else if (!text[i].match(/^[A-Za-z]+$/)) {
      console.log(text[i]);
      if (parseInt(`${word.length}`) > `${longestWord.length}`) {
        longestWord = word;
        
      }
      word = "";
    }
  }
  return longestWord;
}
// console.log(longestWord("ABCd"));

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
function lowestNumber(A) {
  for (var number = 1; number <= 100000; number++) {
    if (!A.includes(number)) {
      return number;
    }  
  }
}
// console.log(lowestNumber([1, 3, 6, 4, 1, 2]));
// console.log(lowestNumber([1, 2, 3]));
// console.log(lowestNumber([-1, -3]));

// && parseInt(time.charAt(0)) < 3
// !isNaN(parseInt(time.charAt(0))) &&  
// function realTime(time) {
//   if (parseInt(time.charAt(0)) === 0) {
//     if (parseInt(time.charAt(1)) >= 0 && parseInt(time.charAt(1)) <= 9 && parseInt(time.charAt(3)) >= 0 && parseInt(time.charAt(3)) <= 5 && parseInt(time.charAt(4)) >= 0 && parseInt(time.charAt(4)) <= 9) {
//       return true;
//     } else {
//       return false;
//     }
//   } else if (parseInt(time.charAt(0)) === 1) {
//     if (parseInt(time.charAt(1)) >= 0 && parseInt(time.charAt(1)) <= 9 && parseInt(time.charAt(3)) >= 0 && parseInt(time.charAt(3)) <= 5 && parseInt(time.charAt(4)) >= 0 && parseInt(time.charAt(4)) <= 9) {
//       return true;
//     } else {
//       return false;
//     }
//   } else if (parseInt(time.charAt(0)) === 2) {
//     if (parseInt(time.charAt(1)) >= 0 && parseInt(time.charAt(1)) <= 3 && parseInt(time.charAt(3)) >= 0 && parseInt(time.charAt(3)) <= 5 && parseInt(time.charAt(4)) >= 0 && parseInt(time.charAt(4)) <= 9) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }

function realTime(time) {
  var hoursMinutes = time.split(':');
  return hoursMinutes[0] < 24 && hoursMinutes[1] < 60;
}
console.log(realTime("13:58"));
console.log(realTime("25:51"));
console.log(realTime("02:76"));
var str = "23:58";
console.log(parseInt(str.charAt(3)));
