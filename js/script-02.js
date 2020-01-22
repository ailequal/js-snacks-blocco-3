// create two string
// var firstString = 'first';
var firstString = prompt('Insert first string');
// var secondString = 'second';
var secondString = prompt('Insert second string');

console.log(firstString);
console.log(secondString);

// check that is present the second one in the first one
if (firstString.indexOf(secondString) === -1) {
  console.log('Nothing inside the first string');
} else {
  console.log('I found something inside the first string');
}
