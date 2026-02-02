//* Task - 3 Solution:
//  TODO:  Write a function to count the number of vowels in a string.

const string = "pneumonoultramicroscopicsilicovolcanoconiosis";

function countVowels(word) {
    let count = 0;
    for (const cher of word) {
        if (cher === "a" || cher === "e" || cher === "i" || cher === "o" || cher === "u") {
            count++;
        }
    }
    return count;
}

console.log(countVowels(string)); //Output: 20