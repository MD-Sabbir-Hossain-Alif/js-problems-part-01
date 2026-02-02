//* Task - 2 Solution:
//  TODO:  You are given an array of numbers. Count how many times the a number is repeated in the array.

const numbers = [5, 6, 11, 12, 98, 5];
const findNum = 5;
const findNum2 = 25;

function repeated(nums, find) {
    let count = 0;
    for (const num of nums) {
        if (num === find) {
            count++
        }
    }
    return count;
}
console.log(repeated(numbers, findNum)); // Output: 2
console.log(repeated(numbers, findNum2)); // Output: 0
