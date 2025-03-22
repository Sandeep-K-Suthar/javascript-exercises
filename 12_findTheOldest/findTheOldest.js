const findTheOldest = function (people) {

    let oldestAge = [];
    let bigOldestAge;
    let bigOldestAgeIndex;

    for (let index = 0; index < people.length; index++) {
        if (people[index].yearOfDeath) {
            oldestAge[index] = people[index].yearOfDeath - people[index].yearOfBirth
        }
        if (!people[index].yearOfDeath) {
            oldestAge[index] = new Date().getFullYear() - people[index].yearOfBirth;
        }
    }

    for (let index = 0; index < oldestAge.length; index++) {
        if (bigOldestAge === undefined) {
            if (oldestAge[index] > oldestAge[index + 1]) {
                bigOldestAge = oldestAge[index];
                bigOldestAgeIndex = 0;
                index = 2;
            }
            else {
                bigOldestAge = oldestAge[index + 1];
                bigOldestAgeIndex = 1;
                index = 2;

            }
        }
        else {
            if (oldestAge[index] > bigOldestAge) {
                bigOldestAge = oldestAge[index];
                bigOldestAgeIndex = index;
            }
        }

    }
    return people[bigOldestAgeIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
