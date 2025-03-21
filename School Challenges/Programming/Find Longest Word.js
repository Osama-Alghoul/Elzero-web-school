function longest_word_in(sentence) {
    return sentence.split(' ').sort((a, b) => b.length - a.length)[0];
}

// Testing Ouput
console.log(longest_word_in("In Programming We Love Elzero Academy Tooooooooooo Much")) // Tooooooooooo