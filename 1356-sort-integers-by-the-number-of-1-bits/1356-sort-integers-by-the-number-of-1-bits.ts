function sortByBits(arr: number[]): number[] {
    return arr.toSorted((num1, num2) => {
        const num1BitsCount: number = countBits(num1);
        const num2BitsCount: number = countBits(num2);

        if (num1BitsCount < num2BitsCount) return -1;
        if (num1BitsCount > num2BitsCount) return 1;
        return num1 - num2;
    })
};

function countBits(num: number): number {
    const binaryNum: string = num.toString(2);
    let bitsCount: number = 0;

    for (const bit of binaryNum) {
        if (bit === '1') {
            bitsCount++;
        }
    }

    return bitsCount;
};