/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function(s1, s2) {
    const map1 = {};
    for (const char of s1) {
        map1[char] = (map1[char] ?? 0) + 1;
    }
    
    let currLen = 0;
    const map2 = {};

    for (let i = 0; i < s2.length; i++) {
        const char = s2[i];
        currLen++;
        map2[char] = (map2[char] ?? 0) + 1;

        if (currLen < s1.length) continue;

        if (isEqualMaps(map2, map1)) return true;

        const frontChar = s2[i - currLen + 1];

        map2[frontChar]--;
        if (map2[frontChar] === 0) delete map2[frontChar];
        
        currLen--;
    }

    return false;
};

const isEqualMaps = function(map1, map2) {
    if (Object.keys(map1).length !== Object.keys(map2).length) return false;

    for (const [char, freq] of Object.entries(map1)) {
        if (map2[char] !== freq) return false;
    }

    return true;
};
