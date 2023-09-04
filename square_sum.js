// input: array of integers
// output: one integer

// PSEUDOCODE
// declare variable, sum, that is set to equal 0
// must loop through the array
// For every integer in the array,
// must times the integer by itself
// then must add the result to the sum variable
// must return the sum variable (integer)
// after looping operations

function squareSum(numbers) {
  var sum = 0
  for (var i = 0; i < numbers.length; i++) {
    sum += (numbers[i] * numbers[i])
  }
  return sum
}

console.log(squareSum([1, 2, 2]));
// => 9