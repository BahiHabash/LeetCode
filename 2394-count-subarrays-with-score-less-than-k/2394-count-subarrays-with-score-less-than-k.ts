function countSubarrays(nums: number[], k: number): number {
    // Get prefixSum for nums array
    const prefixSum: number[] = new Array(nums.length + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }
    
    // number of non-empty subarrays of nums whose score is strictly less than k
    let count: number = 0;
    
    for (let start = 0; start < prefixSum.length; start++) {
        const end: number = lowerBound(prefixSum, start, prefixSum.length, k);
        count += end - start + 1; // length of current window
    }

    return count;
}

function lowerBound(nums: number[], start: number, end: number, k: number): number {
    let l: number = start;
    let r: number = end - 1;
    let res: number = start - 1;

    while (l <= r) {
        const mid: number = l + Math.floor((r - l) / 2);
        const score = (nums[mid + 1] - nums[start]) * (mid - start + 1);

        if (score < k) {
            res = mid;        // mid is a valid candidate
            l = mid + 1;   
        } else {
            r = mid - 1;    
        }
    }

    return res;
}
