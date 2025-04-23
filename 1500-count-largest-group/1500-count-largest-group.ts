function countLargestGroup(n: number): number {4
    const digitsSumFreq = new Map<number, number>();
    let maxDigitsSumFreq: number = 0;

    while(n) {
        const digitsSum: number = sumOfDigits(n);
        digitsSumFreq.set(digitsSum, (digitsSumFreq.get(digitsSum) ?? 0) + 1);
        maxDigitsSumFreq = Math.max(maxDigitsSumFreq, digitsSumFreq.get(digitsSum));
        n--;
    }

    let numOfGroupsWithLargestSize: number = 0;
    
    for (const freq of digitsSumFreq.values()) {
        if (freq === maxDigitsSumFreq) {
            numOfGroupsWithLargestSize++;
        }
    }

    return numOfGroupsWithLargestSize;
};

function sumOfDigits(n: number): number {
    let sum: number = 0;
    
    while(n) {
        sum += n % 10;
        n = Math.trunc(n / 10);
    }

    return sum;
};

