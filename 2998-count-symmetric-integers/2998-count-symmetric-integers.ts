function countSymmetricIntegers(low: number, high: number): number {
    let numOfSymmetrics: number = 0;
    for (let i: number = low; i <= high; i++) {
        if (isSymmetric(i)) {
            numOfSymmetrics++;
        }
    }

    return numOfSymmetrics;
};

function isSymmetric(num: number): boolean {
    const numString: string = String(num);

    if (numString.length % 2 === 1) return false;

    let sum: number = 0;
    for (let i = 0; i < numString.length / 2; i++) {
        sum += Number(numString[i]);
    }

    for (let i = numString.length / 2; i < numString.length; i++) {
        sum -= Number(numString[i]);
    }

    return sum === 0;
};