function maxProfit(prices: number[]): number {
    let minPrice: number = Infinity;
    let maxProfit: number = 0;

    for (const price of prices) {
        maxProfit = Math.max(price - minPrice, maxProfit);
        minPrice = Math.min(price, minPrice);
    }

    return maxProfit;
};