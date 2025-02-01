/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let maxAmount = 0;
    let [l, r] = [0, height.length - 1];

    while (l < r) {
        const currAmount = Math.min(height[l], height[r]) * (r - l);
        maxAmount = Math.max(currAmount, maxAmount);

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }

    return maxAmount;
}