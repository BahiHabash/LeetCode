function countPrimeSetBits(left: number, right: number): number {
    let primeSetBitsCnt: number = 0;

    for (let num = left; num <= right; num++) {
        let setBits: number = 0;

        for (const bit of num.toString(2)) {
            if (bit === '1') {
                setBits++;
            }
        }

        if (isPrime(setBits)) {
            primeSetBitsCnt++;
        }
    }

    return primeSetBitsCnt;
};

function isPrime(num: number): boolean {
    return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31].includes(num);
};