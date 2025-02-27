function seq_multi(num, counts, exclude) {
    // Your Code
    let arr = [];
    arr.push(num);
    for (let i = 1; i < counts; i++) {
        num = num * num;
        arr.push(num);
    }
    arr = arr.filter(no => no !== exclude);
    return arr;
}

// Test Cases
console.log(seq_multi(2, 5, 256)); // [2, 4, 16, 65536]
console.log(seq_multi(3, 4, 6561)); // [3, 9, 81]