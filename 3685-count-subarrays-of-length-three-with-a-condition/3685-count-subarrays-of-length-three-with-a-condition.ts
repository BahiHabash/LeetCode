function countSubarrays(nums: number[]): number {
    let n1: number = nums[0];
    let n2: number = nums[1];
    let n3: number = nums[2];
    let cnt: number = ((n1 + n3) * 2 === n2) ? 1 : 0;

    for (let i = 3; i < nums.length; i++) {
        n1 = n2;
        n2 = n3;
        n3 = nums[i];
        cnt += ((n1 + n3) * 2 === n2) ? 1 : 0;
    }

    return cnt;
};