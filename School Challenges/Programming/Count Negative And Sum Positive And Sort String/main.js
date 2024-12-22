let arr = [1, 10, 15, -2, -5, 0, "Z", "A", 8, -30, 5, "C"];

function getResult(arr) {
    let pstvNum = 0;
    let ngtvNum = 0;
    let chars = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0 && typeof(arr[i]) === "number") {
            pstvNum += arr[i];
        } else if (arr[i] < 0 && typeof(arr[i]) === "number") {
            ngtvNum++;
        } else {
            chars += arr[i];
        }
    }
    chars = chars.split('').sort().join('');
    return [pstvNum, ngtvNum, chars];
}

console.log(getResult(arr));

// Ouput
[39, 3, 'ACZ']