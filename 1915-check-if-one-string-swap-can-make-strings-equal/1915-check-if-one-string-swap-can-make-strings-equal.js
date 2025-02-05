/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function areAlmostEqual(s1, s2) {
    const s1DiffChar = [];
    const s2DiffChar = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            s1DiffChar.push(s1[i]);
            s2DiffChar.push(s2[i]);
        }
    }

    if (
        (s1DiffChar.length !== s2DiffChar.length) ||
        (! [0, 2].includes(s1DiffChar.length)) ||
        (! [0, 2].includes(s2DiffChar.length))
    ) return false;
    
    return (s1DiffChar.join('') === s2DiffChar.join('')) || (s1DiffChar[1] + s1DiffChar[0] === s2DiffChar.join(''))
}