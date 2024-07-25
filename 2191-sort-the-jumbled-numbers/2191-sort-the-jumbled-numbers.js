/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
function sortJumbled(mapping, nums) {
    const decimalValues = {};

    function getDecimalValue(num) {
        if (decimalValues[num]) return decimalValues[num];

        let decimalValue = '';

        for (const digit of String(num))
            decimalValue += mapping[digit];

        decimalValues[num] = (decimalValue -= 0);

        return decimalValue;
    };

    return nums.sort((a, b) => getDecimalValue(a) - getDecimalValue(b));
};

