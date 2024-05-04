/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    const [zeros, nonZerosProduct] = nums.reduce((acc, n) => {
        if (n === 0)
            return [++acc[0], acc[1]];
        else
            return [acc[0], acc[1] * n];
    }, [0, 1]);

    if (zeros > 1)
        return nums.map(n => 0);

    if (zeros === 1)
        return nums.map(n => n === 0 ? nonZerosProduct : 0);

    return nums.map(n => nonZerosProduct * (n ** -1));
};