function wordBeforeLastLength(sentence) {
    let words = sentence.trim().split(/\s+/).filter(word => word.length > 1);

    if (words.length === 1) {
        return false;
    }
    if (words.length === 2) {
        return words[0];
    }
    return words[words.length - 2].length;
}

console.log(wordBeforeLastLength("Elzero Web School")); // Web => 3
console.log(wordBeforeLastLength("Hello Elzero Web School    A ")); // Web => 3
console.log(wordBeforeLastLength("Hello Elzero    Web   School  ")); // Web => 3
console.log(wordBeforeLastLength("Hello")); // False
console.log(wordBeforeLastLength("Hello Elzero")); // Hello
console.log(wordBeforeLastLength("Hello Elzero    A")); // Hello
