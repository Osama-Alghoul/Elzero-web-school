function find_missing_letters_in(letters) {
    let missingChar = [];
    for (let i = 0; i < letters.length - 1; i++) {
        let currentCharCode = letters.charCodeAt(i);
        let nextCharCode = letters.charCodeAt(i + 1);
        for (let j = currentCharCode + 1; j < nextCharCode; j++) {
            missingChar.push(String.fromCharCode(j));
        }
    }
    return missingChar.length > 0 ? missingChar.join("") : "No Missing Letters In Sequence";
}

// Testing Output
console.log(find_missing_letters_in("abeghik")) // cdfj
console.log(find_missing_letters_in("defgi")) // h
console.log(find_missing_letters_in("xyz")) // No Missing Letters In Sequence