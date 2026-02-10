function longestBalanced(nums: number[]): number {
    let maxLen: number = 0;

    for (let i = 0; i < nums.length; i++) {
        const odd = new Set<number>();
        const even = new Set<number>();

        for (let j = i; j < nums.length; j++) {
            if (nums[j] % 2 === 0) {
                even.add(nums[j]);
            } else {
                odd.add(nums[j]);
            }

            if (odd.size == even.size) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }

    return maxLen;
}