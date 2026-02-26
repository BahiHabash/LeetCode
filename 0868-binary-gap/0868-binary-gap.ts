function binaryGap(n: number): number {
    if (n === 0) return 0;

    let maxDistance: number = 0;
    const binary: string = n.toString(2);

    let left: number = binary.indexOf('1');

    for (let right = left + 1; right < binary.length; right++) {
        if (binary[right] === '1') {
            maxDistance = Math.max(right - left, maxDistance);
            left = right;
        }
    }

    return maxDistance;
};