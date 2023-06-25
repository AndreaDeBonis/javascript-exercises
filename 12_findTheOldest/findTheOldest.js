const findTheOldest = function(people) {
    const max = Math.max(...people.map(person => {
        if (!person.yearOfDeath) person.yearOfDeath = (new Date()).getFullYear()
        person.age = person.yearOfDeath - person.yearOfBirth
        return person
    }).map(person => person.age));
    for (let i = 0; i < people.length; i++) {
        if (people[i].age == max) return people[i]
    }
};

// Do not edit below this line
module.exports = findTheOldest;

