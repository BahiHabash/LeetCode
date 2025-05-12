function findEvenNumbers(digits: number[]): number[] {
    const digitsFreq = new Array(10).fill(0);

    for (const d of digits) {
        digitsFreq[d]++;
    }

    let ans: number[] = [];
    
    for (let num = 100; num <= 999; num += 2) {
        const numDigitsFreq = new Array(10).fill(0);
        for (const d of [...`${num}`]) {
            numDigitsFreq[+d]++;
        }
        
        const isValid: boolean = numDigitsFreq.every((freq, d) => digitsFreq[d] >= freq);
        if (isValid) {
            ans.push(num);
        }
    }

    return ans;
};