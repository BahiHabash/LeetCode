class FindSumPairs {
    private nums1: number[];
    private nums2: number[];
    private numsFreq1: Map<number, number>;
    private numsFreq2: Map<number, number>;

    constructor(nums1: number[], nums2: number[]) {
        this.nums1 = nums1;
        this.nums2 = nums2;
        this.numsFreq1 = this.numFreq(nums1);
        this.numsFreq2 = this.numFreq(nums2);
    }

    add(index: number, val: number): void {
        // Update frequency map for old number
        const oldNum: number = this.nums2[index];
        const oldFreq = this.numsFreq2.get(oldNum) ?? 0;
        if (oldFreq <= 1) {
            this.numsFreq2.delete(oldNum);
        } else {
            this.numsFreq2.set(oldNum, oldFreq - 1);
        }

        // Update the array and frequency map
        const newNum: number = oldNum + val;
        this.nums2[index] = newNum;
        this.numsFreq2.set(newNum, (this.numsFreq2.get(newNum) ?? 0) + 1);
    }

    count(tot: number): number {
        let count = 0;

        for (const [num, freq] of this.numsFreq1) {
            const complement = tot - num;
            count += freq * (this.numsFreq2.get(complement) ?? 0);
        }

        return count;
    }

    private numFreq(nums: number[]): Map<number, number> {
        const freqMap = new Map<number, number>();

        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
        }
        
        return freqMap;
    }
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */