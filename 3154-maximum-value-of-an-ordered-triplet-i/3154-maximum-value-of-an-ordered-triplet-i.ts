function maximumTripletValue(nums: number[]): number {
    const len: number = nums.length;
    let triplet: number = 0;

    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                triplet = Math.max((nums[i] - nums[j]) * nums[k], triplet);
            }
        }
    }

    return triplet;
};