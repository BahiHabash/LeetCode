function minMaxDifference(num: number): number {
    const maxNum: number = getMaxNum(num);
    const minNum: number = getMinNum(num);

    return maxNum - minNum;
};

function getMaxNum(num: number): number {
    const numString: string = String(num);
    let maxRemapedDigit: string = '9';
    let maxNum: string = '';

    for (const d of numString) {
        if (d !== '9') {
            maxRemapedDigit = d;
            break;
        }
    }

    for (const d of numString) {
        if (d === maxRemapedDigit) {
            maxNum += '9';
        } else {
            maxNum += d;
        }
    }

    return Number(maxNum);
};

function getMinNum(num: number): number {
    const numString: string = String(num);

    const minRemapedDigit: string = numString[0];
    let minNum: string = '';

    for (const d of numString) {
        if (d === minRemapedDigit) {
            minNum += '0';
        } else {
            minNum += d;
        }
    }

    return Number(minNum);
};