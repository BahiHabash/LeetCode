function differenceOfSums(n: number, m: number): number {
    let sumDivisible: number = 0;
    for (let i = m; i <= n; i += m) sumDivisible += i;

    const sumNotDivisible: number = ((n * (n + 1)) / 2) - sumDivisible;

    return sumNotDivisible - sumDivisible;
};