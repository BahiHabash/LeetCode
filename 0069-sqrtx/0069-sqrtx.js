/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
    if (x === 1) return 1;
    return binarySearch(0, x, x);
};

function binarySearch(left, right, target) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (mid**2 === target) {
            return mid;
        } else if ((mid**2 < target) && ((mid + 1)**2 > target)) {
            return mid;
        } else if (mid**2 < target) {
            left = mid;
        } else {
            right = mid;
        }
    }

    return -1;
}