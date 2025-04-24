function countCompleteSubarrays(nums: number[]): number {
    // at least there is one complete array
    let numOfCompleteSubarrays: number = 1;
    const numOfDistinctNums: number = new Set<number>(nums).size;

    for (let i = numOfDistinctNums; i < nums.length; i++) {
        const currWindow = new Map<number, number>();

        // initial the window
        for (let j = 0; j < i; j++) {
            currWindow.set(nums[j], (currWindow.get(nums[j]) ?? 0) + 1);
        }
        // update numOfCompleteSubarrays
        if (currWindow.size === numOfDistinctNums) {
            numOfCompleteSubarrays++;
        }

        // slide the window
        for (let j = i; j < nums.length; j++) {
            // remove left most element
            currWindow.set(nums[j - i], (currWindow.get(nums[j - i]) ?? 0) - 1);
            // update numOfCompleteSubarrays
            if (currWindow.get(nums[j - i]) === 0) {
                currWindow.delete(nums[j - i]);
            }
            
            // add right most element
            currWindow.set(nums[j], (currWindow.get(nums[j]) ?? 0) + 1);
            // update numOfCompleteSubarrays
            if (currWindow.size === numOfDistinctNums) {
                numOfCompleteSubarrays++;
            }
        }
    }

    return numOfCompleteSubarrays;
};