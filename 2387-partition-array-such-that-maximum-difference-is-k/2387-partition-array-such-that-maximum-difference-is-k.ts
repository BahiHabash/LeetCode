function partitionArray(nums: number[], k: number): number {
    let min: number = Infinity;
    let max: number = -Infinity;
    const numCnt = new Map<number,number>();

    for (const num of nums) {
        min = Math.min(num, min);
        max = Math.max(num, max); 
        numCnt.set(num, (numCnt.get(num) ?? 0) + 1);
    }

    let groups: number = 0;

    for (let i = min; i <= max; i++) {
        if (!numCnt.has(i)) continue;

        for (let n = i; n <= i + k; n++) {
            numCnt.delete(n);
        }
             
        groups++;
    }


    return groups;
};