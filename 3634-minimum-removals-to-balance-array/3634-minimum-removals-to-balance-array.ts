function minRemoval(nums: number[], k: number): number {
    const len: number = nums?.length ?? 0;

    if (len < 2) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    let l: number = 0;
    let r: number = 1;
    let minRemoves: number = nums.length - 1;

    while (r < len) {
        if (nums[l] * k >= nums[r]) {
            r++;
        } else {
            l++;
            minRemoves = Math.min(len - (r - l + 1), minRemoves);
        }
    }
    
    minRemoves = Math.min(len - (r - l), minRemoves);

    return minRemoves;
};