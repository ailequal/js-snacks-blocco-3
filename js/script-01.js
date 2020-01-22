// write a function that generate random different numbers, with selected amount of numbers
var arrayLength = parseInt(prompt('Insert the array length between 1 and 100'));
console.log(arrayLength);
var arrayNumber = [];
arrayNumber = arrayGenerator(arrayNumber, arrayLength);
console.log(arrayNumber);

// function
// random number generator between min max
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generate array with random numbers
function arrayGenerator(array, length) {
  var i = 0;
  var number = 0;
  while (i < length) {
    number = getRandomNumber(1, 100);
    if (!array.includes(number)) {
      array[i] = number;
      i++;
    }
  }
  return array;
}

// scan array
// function arrayScan(array, item) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === item) {
//       return true;
//     }
//   }
//   return false;
// }
