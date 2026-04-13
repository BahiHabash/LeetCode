function finalPrices(prices: number[]): number[] {
    const stack: number[] = [];
 
    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[stack.at(-1)] >= prices[i]) {
            prices[stack.pop()] -= prices[i];
        }
        stack.push(i);
    }

    return prices;
};