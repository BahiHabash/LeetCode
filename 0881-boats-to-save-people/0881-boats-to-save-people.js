/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);
    let l = 0
      , r = people.length - 1
      , boats = 0;
    
    while (l <= r) {
        boats++;
        if (limit - people[r] >= people[l]) l++;
        r--;
    }

    return boats;
};