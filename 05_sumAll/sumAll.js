const sumAll = function(from, to) {
    if (from < 0 || to < 0) return "ERROR"
    else if (typeof from != "number" || typeof to != "number") return "ERROR"
    else if (from == to) return from
    else if (from > to) return from + sumAll(from-1, to)
    else return from + sumAll(from+1, to)
};

// Do not edit below this line
module.exports = sumAll;
