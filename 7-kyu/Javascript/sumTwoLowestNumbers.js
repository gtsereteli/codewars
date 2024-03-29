// 7kyu
// Sum of two lowest positive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014

// DESCRIPTION:
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
// No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// Functions: sort()

/**
 * Sums two smallest numbers in an array
 * 
 * @param {array} numbers is the input num array
 * 
 * @returns {array} sum of two smallest numbers
 */
function sumTwoSmallestNumbers(numbers) {
    let arrSorted = numbers.sort((a, b) => a - b);
    return arrSorted[0] + arrSorted[1];
}
