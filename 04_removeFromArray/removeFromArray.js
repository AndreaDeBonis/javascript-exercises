const removeFromArray = function(array, ...args) {
    for (let i = 0; i < args.length; i++) {
        let index = array.indexOf(args[i])
        if (index != -1 && ( typeof args[i] == typeof array[index])) {
            array.splice(index, 1)
        }
        else continue
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
