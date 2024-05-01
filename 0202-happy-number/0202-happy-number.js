/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    const nums = new Set();

    while (n > 1) {
        n = [...`${n}`].reduce((acc, digit) => acc + digit ** 2, 0);
        if (nums.has(n))
            return false;
        else
            nums.add(n);
    }

    return true;
};