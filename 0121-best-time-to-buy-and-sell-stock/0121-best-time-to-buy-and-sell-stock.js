/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) { // Time : O(n), Space : O(1)
    let l = 0, r = 0
       ,maxProfit = 0;
    while (r < prices.length) {
        if (prices[l] >= prices[r])
            l = r;
        else 
            maxProfit = Math.max(prices[r] - prices[l], maxProfit);
        r++;
    }
    return maxProfit;
};