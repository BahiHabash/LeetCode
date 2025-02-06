/**
 * @param {number[]} nums
 * @return {number}
 */
function tupleSameProduct(nums) {
    const productFreq = {}; // Map to store frequency of each product

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (i !== j) {
                const product = nums[i] * nums[j];
                productFreq[product] = (productFreq[product] || 0) + 1;
            }
        }
    }

    let count = 0;

    for (const freq of Object.values(productFreq)) {
        // For each product with frequency `freq`, calculate the number of quadruplets
        count += (freq * (freq - 1)) / 2; // Combination formula: C(freq, 2) * 8
    }

    return count * 8;
}