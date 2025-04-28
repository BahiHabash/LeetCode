function countSubarrays(nums: number[], k: number): number {
    // Get prefixSum for nums array
    const prefixSum: number[] = new Array(nums.length);
    let prefix: number = 0

    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i];
        prefixSum[i] = prefix;
    }
    
    
    // number of non-empty subarrays of nums whose score is strictly less than k
    let count: number = 0;
    
    for (let i = 0; i < nums.length; i++) {
        const windowRightIndex: number = lowerBound(prefixSum, i, prefixSum.length, k);
        const windowLength: number = windowRightIndex - i; // length of current window

        // add all possible subarrays could be generated from current window
        count += windowLength; 
    }

    return count;
}

function lowerBound(nums: number[], low: number, high: number, k: number): number {
    let l: number = low;
    let r: number = high;
    let res: number = low;

    while (l <= r) {
        const mid = Math.floor(l + ((r - l) / 2));
        const score = (nums[mid] - (nums[low - 1] || 0)) * (mid - low + 1);

        if (score < k) {
            l = mid + 1;
        } else {
            res = mid;
            r = mid - 1;   
        }
    }

    return res;
}
