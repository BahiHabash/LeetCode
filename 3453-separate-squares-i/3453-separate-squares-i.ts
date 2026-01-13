function separateSquares(squares: number[][]): number {
    let low: number = Infinity;
    let high: number = 0;
    let totalArea: number = 0;

    for (const [_, y, l] of squares) {
        low = Math.min(low, y);
        high = Math.max(high, y + l);
        totalArea += l * l;
    }

    const targetArea: number = totalArea / 2;

    while ((high-low) > 10**-5) {
        const mid: number = (low + high) / 2;
        let areaBlowMid: number = 0;

        // calc current area (area below mid)
        for (const [_, y, l] of squares) {
            if (y < mid) {
                areaBlowMid += l * Math.min(l, mid - y);
            }
        }

        if (areaBlowMid < targetArea) {
            low = mid;
        } else {
            high = mid;
        }
    }

    return low;
};