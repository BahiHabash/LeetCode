/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
function sortJumbled(mapping, nums) {
    const dicimalSys = new Map();

    nums.forEach( num => dicimalSys.set(num, converToDecimal(mapping, num)) );

    return nums.sort((a, b) => dicimalSys.get(a) - dicimalSys.get(b));
};

function converToDecimal(mapping, num) {
    let result = '';

    for (const digit of String(num))
        result += mapping[digit];

    return +result;
};