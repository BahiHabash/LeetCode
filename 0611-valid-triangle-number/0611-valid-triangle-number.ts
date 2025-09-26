function triangleNumber(nums: number[]): number {
    const len: number = nums.length;
    let triplets: number = 0;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            const MinThirdSide: number = nums[j] - nums[i] + 1;
            const MaxThirdSide: number = nums[i] + nums[j] - 1;
            const endIdx: number = upperBound(MaxThirdSide, j + 1);
            const startIdx: number = lowwerBound(MinThirdSide, j + 1);

            if (endIdx > 0 && startIdx > 0)
                triplets += Math.max(endIdx - startIdx + 1);
        }
    }

    return triplets;


    function lowwerBound(target: number, left: number) {
        let idx: number = -1;
        let right: number = len - 1;

        while (left <= right) {
            const mid: number = left + Math.floor((right - left) / 2);

            if (nums[mid] >= target) {
                idx = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        return idx;
    }

    function upperBound(target: number, left: number) {
        let idx: number = -1;
        let right: number = len - 1;

        while (left <= right) {
            const mid: number = left + Math.floor((right - left) / 2);

            if (nums[mid] <= target) {
                idx = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return idx;
    }
};