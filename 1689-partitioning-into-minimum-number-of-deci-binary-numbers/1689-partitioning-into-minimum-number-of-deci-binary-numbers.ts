function minPartitions(n: string): number {
    let ans: string = '0';

    for (const digit of n) {
        if (digit > ans) {
            ans = digit;
        }
    }

    return +ans;
};