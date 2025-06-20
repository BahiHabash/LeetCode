function maxDiff(num: number): number {
    const max: number = getMax(num);
    const min: number = getMin(num);

    return max - min;
};

function getMax(num: number): number {
    const numString: string = String(num);
    let max: string = '';

    for (const d of numString) {
        if (d === '9') {
            max += d;
        } else {
            max = numString.replaceAll(d, '9');
            break;
        }
    }

    return Number(max);
};

function getMin(num: number): number {
    const numString: string = String(num);
    let min: string = numString.replaceAll(numString[0], '1');
    
    for (const d of numString) {
        if (
            d !== '0' && 
            numString.replaceAll(d, '0')[0] !== '0'
        ) {
            const newMin: string = numString.replaceAll(d, '0');
            if (newMin < min) {
                min = newMin;
            }
        }
    }

    return Number(min);
};