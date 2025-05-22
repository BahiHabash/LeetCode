function isZeroArray(nums: number[], queries: number[][]): boolean {
    const transArr: number[] = new Array(nums.length + 1).fill(0);

    // build a prefix
    for (const [l, r] of queries) {
        transArr[l]++;
        transArr[r + 1]--;
    }
    
    transArr.pop(); // delete the unnecessary extra element

    // get the transformed array
    let acc: number = 0;
    for (let i = 0; i < transArr.length; i++) {
        acc += transArr[i];
        transArr[i] = nums[i] - acc;
    }
    
    // check if a Zero Array could be generated
    return transArr.every(n => n <= 0);
};