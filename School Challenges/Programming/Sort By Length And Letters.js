let sortAs = function (arr) {
    return arr.filter(word => word.startsWith("a") || word.startsWith("A")).sort().reverse();
}

console.log(sortAs(["Ameer", "alsayed", "Mahmoud", "Ahmed", "ayman", "Israa", "Anas", "amal", "amr", "aml"]))

// second way is the same but using if statment