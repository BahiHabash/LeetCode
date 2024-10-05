/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function(s1, s2) {
    const s1Map = new Map();
    for (const char of s1) {
        s1Map.set(char, (s1Map.get(char) ?? 0) + 1);
    }
    
    let window = '';
    const windowMap = new Map();
    for (const char of s2) {
        window += char;
        windowMap.set(char, (windowMap.get(char) ?? 0) + 1);

        if (window.length < s1.length) continue;

        if ( isEqualMaps(windowMap, s1Map) ) return true;

        const frontChar = window[0];

        windowMap.set(frontChar, windowMap.get(frontChar) - 1);
        if (windowMap.get(frontChar) === 0) windowMap.delete(frontChar);

        window = window.slice(1);
    }

    return false;
};

const isEqualMaps = function(map1, map2) {
    if (map1.size !== map2.size) return false;
    return [...map1.entries()]
            .every(([char, freq]) => 
                freq === map2.get(char)
            );
};