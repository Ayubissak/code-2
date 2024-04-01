function swapCase(inputString) {
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();
        }
    }

    return swappedString;
}
console.log(swapCase)("The Quick Brown Fox");