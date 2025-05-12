function findEvenNumbers(digits: number[]): number[] {
    const ans: number[] = [];

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === 0) continue;

        for (let j = 0; j < digits.length; j++) {
            if (i === j) continue;

            for (let k = 0; k < digits.length; k++) {
                if ((i === k) || (j === k) || (digits[k] % 2 === 1)) continue;
                const num: number = (digits[i] * 100) + (digits[j] * 10) + (digits[k]);
                ans.push(num);
            }
        }
    }

    return [...new Set(ans)].sort((a, b) => a - b);
};