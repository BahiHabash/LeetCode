/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) { // Time : O(n), Space : O(1)
    const productArr = new Array(nums.length).fill(0);
    const zeros = nums.reduce((acc, n) => acc + (n === 0), 0);
    const productWithoutZeros = nums.reduce((acc, n) => acc * (n === 0 ? 1 : n), 1);

    if (zeros === 0)
        productArr.forEach((n, i, pArr) => pArr[i] = (productWithoutZeros / nums[i]));
    else if (zeros === 1)
        productArr.forEach((n, i, pArr) => pArr[i] = (nums[i] === 0 ? productWithoutZeros : 0));

    return productArr;
};