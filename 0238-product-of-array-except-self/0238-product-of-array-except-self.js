/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) { // Time : O(n), Space ; O(n)
    const productArr = new Array(nums.length).fill(1);

    let frontProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        productArr[i] *= frontProduct;
        frontProduct *= nums[i];
    }

    let backProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        productArr[i] *= backProduct;
        backProduct *= nums[i];
    }

    return productArr;
};