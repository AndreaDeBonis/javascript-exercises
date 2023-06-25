const reverseString = function(string) {
    let gnirts = ""
    for (let i = string.length - 1; i >= 0; i--) {
        gnirts+=string[i]
    }
    return gnirts
};

// Do not edit below this line
module.exports = reverseString;
