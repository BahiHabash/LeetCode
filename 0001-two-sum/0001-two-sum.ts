function twoSum(nums: number[], target: number): number[] {
    const numCountAndIndex: Record<number, { count: number; index: number[] }> = {};
    
    for (const [i, num] of nums.entries()) {
        if (numCountAndIndex[num] === undefined) {
            numCountAndIndex[num] = {
                count: 0,
                index: [],
            }
        }

        numCountAndIndex[num].count++;
        numCountAndIndex[num].index.push(i);
    }

    if (numCountAndIndex[target / 2]?.count === 2) {
        return numCountAndIndex[target / 2].index;
    }

    for (const num of Object.keys(numCountAndIndex)) {
        const complement: number = target - Number(num);

        if (numCountAndIndex[complement]) {
            return [numCountAndIndex[complement].index[0], numCountAndIndex[num].index[0]];
        }
    }
};