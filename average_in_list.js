// input: array of integers
// output: one integer

// PSEUDOCODE
// variable count set to zero
// loop through input array
// for every number in the array, add that to the variable count 
// after getting the sum of all numbers and saving to variable count,
// divide count by the input array size
// return zero if input array is empty

// QUESTIONS
// what place should it round to if the average is not a whole number?
// assumption - round to the nearest whole number
// assumption - if .5 - round up, else round down
// 

function averageInList(numbers) {
  var count = 0
  if (numbers.length === 0) {return 0}
  for (var i = 0; i < numbers.length; i++) {
    count += numbers[i];
  }
  return Math.round(count / numbers.length);
}

console.log(averageInList([1, 4, 5, 6, 4, 8, 10]))
// => 5

console.log(averageInList([]))
// => 0

console.log(averageInList([2, 4, 6, 8, 10]))
// => 6

console.log(averageInList([2, -4, 6, 8, -10]))
// => 0


// ------- SOLUTION ONE -------
// function averageInList(numbers) {
//   count = 0;
//   if (numbers.length === 0) {
//     return 0;
//   } else {
//     for (var i = 0; i < numbers.length; i++) {
//       count += numbers[i];
//     }
//   }

//   return Math.round(count / numbers.length);
// }