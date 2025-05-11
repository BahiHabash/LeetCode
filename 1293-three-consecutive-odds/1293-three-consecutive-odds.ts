function threeConsecutiveOdds(arr: number[]): boolean {
    let numOfOdd: number = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) numOfOdd++;
        if (i > 2 && (arr[i - 3] % 2 === 1)) numOfOdd--;
        if (numOfOdd === 3) return true;
    }

    return false;
};