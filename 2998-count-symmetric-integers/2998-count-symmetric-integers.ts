function countSymmetricIntegers(low: number, high: number): number {
    let numOfSymmetrics: number = 0;

    for (let i = low; i <= high; i++) {
        const numString = String(i);

        // skip odd numbers' length
        if (numString.length % 2 === 1) {
            i = 10 ** (numString.length);
            continue;
        }

        if (isSymmetric(numString)) {
            numOfSymmetrics++;
        }
    }

    return numOfSymmetrics;
};

function isSymmetric(numString: string): boolean { 
    let sum: number = 0;
    let halfLen = numString.length / 2;

    for (let i = 0; i < halfLen; i++) {
        sum += Number(numString[i]) - Number(numString[halfLen + i]);
    }

    return sum === 0;
};