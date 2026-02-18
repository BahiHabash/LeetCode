function hasAlternatingBits(n: number): boolean {
    const bits: string = n.toString(2);

    for (let i = 1; i < bits.length; i++) {
        if (bits[i - 1] === bits[i]) {
            return false;
        }
    }

    return true;
};