//* Task - 4 Solution:
//  TODO:  Write a function to find the longest word in a given string.

const statement = "I am learning Programming to become a programmer";
const words = statement.split(" ");

function longestWord(words) {
    let longest = words[0];

    for (const cher of words) {
        if (cher.length > longest.length) {
            longest = cher;
        }
    }
    return longest.length;
};
console.log(longestWord(words)); // Output: 11