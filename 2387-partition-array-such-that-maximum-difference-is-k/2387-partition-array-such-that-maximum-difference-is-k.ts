function partitionArray(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);

    let groups: number = 1;
    let left: number = nums[0];

    for (const num of nums) {
        if ((num - left) > k) {
            left = num;
            groups++;
        }
    }

    return groups;
};