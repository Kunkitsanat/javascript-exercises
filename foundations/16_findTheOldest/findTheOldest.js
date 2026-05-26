const findTheOldest = function(people) {
    const getAge = (p) => {
        const death = p.yearOfDeath || 2026; 
        return death - p.yearOfBirth;
    }

    people.sort((a, b) => getAge(b) - getAge(a));

    return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
