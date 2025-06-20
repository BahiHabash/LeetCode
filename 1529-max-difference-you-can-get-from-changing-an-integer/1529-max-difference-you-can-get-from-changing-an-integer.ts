function maxDiff(num: number): number {
    const numString: string = String(num);
    let max: string = '';
    let min: string = numString;

    // construct the maximum possible number
    for (const d of numString) {
        if (d === '9') {
            max += d;
        } else {
            max = numString.replaceAll(d, '9');
            break;
        }
    }

    // construct the minimum possible number
    if (numString[0] === '1') {
        for (let i = 1; i < numString.length; i++) {
            const d: string = numString[i];

            if (d !== '0' && numString.replaceAll(d, '0')[0] !== '0') {
                min = numString.replaceAll(d, '0');
                break;
            }
        }
    } else {
        min = numString.replaceAll(numString[0], '1');
    }
    
    return Number(max) - Number(min);
};