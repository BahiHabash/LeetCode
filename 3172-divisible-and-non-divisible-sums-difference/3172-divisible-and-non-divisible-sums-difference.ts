function differenceOfSums(n: number, m: number): number {
    let sumDivisible: number = 0;
    let sumNotDivisible: number = 0;

    for (let i = 1; i <= n; i++) {
        if (i % m === 0) 
            sumDivisible += i;
        else 
            sumNotDivisible += i;
    }

    return sumNotDivisible - sumDivisible;
};