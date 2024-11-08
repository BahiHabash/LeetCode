/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
const getMaximumXor = function(nums, maximumBit) {
    const prefixXor = new Array(nums.length).fill(null);
    let comulativeXor = 0;

    // calculate the comulative prefixXor 
    for (const [i, num] of nums.entries()) {
        comulativeXor ^= num;
        prefixXor[i] = comulativeXor;
    }

    // Reverse the prefixXor array to correct it
    for (let i = 0, j = prefixXor.length - 1; i < j; i++, j--) {
        [prefixXor[i], prefixXor[j]] = [prefixXor[j], prefixXor[i]];
    }
    
    // get the maximum num we can get
    const x = 2 ** (maximumBit) - 1;
    return prefixXor.map((n, i) => n ^ x);
};