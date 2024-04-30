/**
 * @param {number} n
 * @return {number}
 */
const numberOfMatches = function(n) {
    let teams = n
      , matches = 0;

    while (teams !== 1) {
        matches += Math.floor(teams / 2);
        teams = Math.ceil(teams / 2);
    }

    return matches;
};