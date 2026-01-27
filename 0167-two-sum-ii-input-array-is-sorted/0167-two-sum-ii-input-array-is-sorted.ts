function twoSum(numbers: number[], target: number): number[] {
    let l: number = 0;
    let r: number= numbers.length - 1;

    while (l < r) {
        const sum: number = numbers[l] + numbers[r];

        if (sum === target) {
            return [l + 1, r + 1];
        } else if (sum > target) {
            r--;
        } else {
            l++;
        }
    }
};