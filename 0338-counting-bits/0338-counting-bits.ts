function countBits(n: number): number[] {
    const ans: number[] = new Array(n + 1);

    for (let i = 0; i <= n; i++) {
        let numOf1s: number = 0;

        for (const d of i.toString(2)) {
            if (d === '1') 
                numOf1s++;
        }

        ans[i] = numOf1s;
    }

    return ans;
};