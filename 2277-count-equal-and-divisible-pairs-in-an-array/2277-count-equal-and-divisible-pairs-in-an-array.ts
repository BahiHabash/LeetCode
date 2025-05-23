function countPairs(nums: number[], k: number): number {
    let pairs: number = 0;

    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            if ((nums[i] === nums[j]) && ((i * j) % k === 0)) {
                pairs++;
            }
        }
    }

    return pairs;
};