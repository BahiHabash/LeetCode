function mySqrt(x: number): number {
    for (let i = 0; i <= x; i++) {
        const product: number = i * i;

        if (product === x) {
            return i;
        }
        
        if (product > x) {
            return i - 1;
        }
    }
};