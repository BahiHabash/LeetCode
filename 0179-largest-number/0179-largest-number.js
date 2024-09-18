/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function(nums) {
    const arrangedNums = nums
        .map(n => String(n))
        .sort((n1, n2) => {
            if ((n2 + n1) === (n1 + n2)) return 0;
            if ((n2 + n1) > (n1 + n2)) return 1;
            return -1;
        });

    if (arrangedNums[0] === '0') return '0';

    return arrangedNums.join('');
};