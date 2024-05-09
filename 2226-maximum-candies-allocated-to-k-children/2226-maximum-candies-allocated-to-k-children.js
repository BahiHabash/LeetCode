/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
const maximumCandies = function(candies, k) { // Time : O(n * log(k)) | Space : O(1)
    let l = 0
      , r = Math.max(...candies)
      , max = 0;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);

        let num = candies.reduce((acc, pile) => acc + Math.floor(pile / mid), 0);

        if (num >= k) {
            max = Math.max(mid, max);
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }

    return max;
};