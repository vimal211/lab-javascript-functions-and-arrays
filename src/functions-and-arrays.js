// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return a;
  }
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(wordsFind) {
  let large = "";
  if (wordsFind.length == 0) {
    large = null;
  } else {
    for (let i = 0; i < wordsFind.length; i++) {
      if (wordsFind[i].length > large.length) {
        large = wordsFind[i];
      } else if (wordsFind[i].length === large.length) {
        large = large;
      }
    }
  }
  return large;
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Progression #3.1: mixed array
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add(mixedArr) {
  let sum = 0;
  for (let i = 0; i < mixedArr.length; i++) {
    if (typeof mixedArr[i] == "string") {
      sum += mixedArr[i].length;
    } else if (typeof mixedArr[i] == "boolean") {
      if (mixedArr[i] === true) {
        sum += 1;
      } else {
        sum += 0;
      }
    } else if (typeof mixedArr[i] == "number") {
      sum += mixedArr[i];
    } else {
      throw new Error("Unsupported data type sir or ma'am");
    }
  }
  return sum;
}


// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg) {
  let sum = 0;
  if (numbersAvg.length === 0) {
    return null;
  } else {
    for (let i = 0; i < numbersAvg.length; i++) {
      sum += numbersAvg[i];
    }
    return sum / numbersAvg.length;
  }
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr) {
  let sum = 0;
  if (wordsArr.length === 0) {
    return null;
  } else {
    for (let i = 0; i < wordsArr.length; i++) {
      sum += wordsArr[i].length;
    }
    return sum / wordsArr.length;
  }
}

// Progression 4.3: mixed array
let mixedAr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function avg(mixedAr) {
  let sum = 0;
  if (mixedAr.length === 0) {
    return null;
  } else {
    for (let i = 0; i < mixedAr.length; i++) {
      if (typeof mixedAr[i] == "string") {
        sum += mixedAr[i].length;
      } else if (typeof mixedAr[i] == "boolean") {
        if (mixedAr[i] === true) {
          sum += 1;
        } else {
          sum += 0;
        }
      } else if (typeof mixedAr[i] == "number") {
        sum += mixedAr[i];
      } else {
        throw new Error("Unsupported data type sir or ma'am");
      }
    }
  }
  return parseFloat((sum / mixedAr.length).toFixed(2));
}



// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(wordsUnique) {
  let unique = [];
  if (wordsUnique.length === 0) {
    return null;
  } else {
    for (let i = 0; i < wordsUnique.length; i++) {
      if (unique.indexOf(wordsUnique[i]) == -1) {
        unique[i] = wordsUnique[i];
      }
    }
  }
  return unique;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind, element) {
  let find = false;
  if (wordsFind.length === 0) {
    return null;
  } else {
    for (let i = 0; i < wordsFind.length; i++) {
      if (wordsFind[i] === element) {
        find = true;
      }
    }
    return find;
  }
}


// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(wordsCount, element) {
  let repeat = 0;
  if (wordsCount.length === 0) {
    repeat = 0;
  } else {
    for (let i = 0; i < wordsCount.length; i++) {
      if (wordsCount[i] === element) {
        repeat += 1;
      }
    }
  }
  return repeat;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix) {
  let product = 0;
  let result;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (j - 3 >= 0) {
        result =
          matrix[i][j] * matrix[i][j - 1] * matrix[i][j - 2] * matrix[i][j - 3];
        if (product < result) {
          product = result;
        }
      }
      if (i - 3 >= 0) {
        result =
          matrix[i][j] * matrix[i - 1][j] * matrix[i - 2][j] * matrix[i - 3][j];
        if (product < result) {
          product = result;
        }
      }
    }
  }
  return product;
}