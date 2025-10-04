function maxArea(height: number[]): number {
    let maxWaterAmount: number = 0;

    let i: number = 0;
    let j: number = height.length - 1;

    while (i < j) {
        const currWaterAmount: number = Math.min(height[i], height[j]) * (j - i);
        maxWaterAmount = Math.max(currWaterAmount, maxWaterAmount);

        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return maxWaterAmount;
};