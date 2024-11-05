/**
 * @param {string} s
 * @return {number}
 */
const minChanges = function(s) {
    let prevDigit = s[0]
      , currLen = 1
      , changesCount = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === prevDigit) {
            currLen++;
        } else {
            if ((currLen % 2) === 0) {
                prevDigit = s[i];
                currLen = 1;
            } else {
                changesCount++;
                prevDigit = '';
                currLen = 0;
            }
        }
    }

    return changesCount;
};