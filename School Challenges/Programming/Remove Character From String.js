function remove_char_from(word, c){
    return word.replace(new RegExp(c, 'gi'), '');
}

// Testing Ouput
console.log(remove_char_from("ElddzeroD WebDD ddSchool", "d")) // Elzero Web School
console.log(remove_char_from("ElxzeroX Web Sxchool", "x")) // Elzero Web School
console.log(remove_char_from("Elzero@ Web@@ @@School", "@")) // Elzero Web School
