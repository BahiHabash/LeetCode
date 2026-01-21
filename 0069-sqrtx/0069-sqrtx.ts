function mySqrt(x: number): number {
    if (x === 0 || x === 1) {
        return x;
    }

    let l: number = 0;
    let r: number = x;

    while (Math.log2(x) + 1) {
        const mid: number = Math.floor((l + r) / 2);
        const product: number = mid * mid;
        
        if (product === x) {
            return mid;
        } else if (product > x) {
            if ((mid - 1) ** 2 < x) {
                return mid - 1;
            }

            r = mid - 1;
        } else {
            if ((mid + 1) ** 2 > x) {
                return mid;
            }

            l = mid + 1;
        }
    }
};