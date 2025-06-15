function minMaxDifference(num: number): number {
    const maxNum: number = getMaxNum(num);
    const minNum: number = getMinNum(num);

    return maxNum - minNum;
};

function getMaxNum(num: number): number {
    const numString: string = String(num);
    let maxNum: string = '';

    for (const d of numString) {
        if (d === '9') {
            maxNum += '9';
        } else {
            maxNum = numString.replaceAll(d, '9');
            break;
        }
    }

    return Number(maxNum);
};

function getMinNum(num: number): number {
    const numString: string = String(num);
    const minNum: string = numString.replaceAll(numString[0], '0');

    return Number(minNum);
};