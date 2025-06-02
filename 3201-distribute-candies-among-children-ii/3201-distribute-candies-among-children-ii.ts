function distributeCandies(n: number, limit: number): number {
    let res: number = 0;;

    for (let i = 0; i <= Math.min(limit, n); i++) {
        if ((n - i) <= 2 * limit) {
            res += Math.min(n - i, limit) - Math.max(n - i - limit, 0) + 1;
        }
    }
    
    return res;
};