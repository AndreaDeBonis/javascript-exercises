const palindromes = function (string) {
    const reverseString = function(string) {
        let gnirts = ""
        for (let i = string.length - 1; i >= 0; i--) {
            gnirts+=string[i]
        }
        return gnirts
    };
    const fixedString = (string.replace(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g , "")).toLowerCase()
    return reverseString(fixedString) == fixedString

};

// Do not edit below this line
module.exports = palindromes;
