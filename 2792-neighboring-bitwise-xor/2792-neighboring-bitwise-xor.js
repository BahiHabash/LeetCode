/**
 * @param {number[]} derived
 * @return {boolean}
 */
function doesValidArrayExist(derived) {
    let xor = 0;

    for (const n of derived) {
        xor ^= n;
    }

    return xor === 0;
}
