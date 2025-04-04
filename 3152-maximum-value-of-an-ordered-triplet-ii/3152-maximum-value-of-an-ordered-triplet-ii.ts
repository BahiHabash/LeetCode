function maximumTripletValue(nums: number[]): number {
    const len: number = nums.length;
    const prefixMax: number[] = new Array(len);
    const suffixMax: number[] = new Array(len);
    let triplet: number = 0;


    for (let i = 0; i < len; i++) {
        prefixMax[i] = Math.max((prefixMax[i - 1] ?? -Infinity), nums[i]);
    }

    for (let i = len - 1; i >= 0; i--) {
        suffixMax[i] = Math.max((suffixMax[i + 1] ?? -Infinity), nums[i]);
    }

    for (let i = 1; i < len - 1; i++) {
        triplet = Math.max((prefixMax[i - 1] - nums[i]) * suffixMax[i + 1], triplet);
    }
    
    return triplet;
};