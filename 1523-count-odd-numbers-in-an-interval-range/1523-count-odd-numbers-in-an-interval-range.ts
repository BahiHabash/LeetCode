function countOdds(low: number, high: number): number {
    let oddCount: number = Math.floor((high - low) / 2);
    
    if (low % 2 === 1 || high % 2 === 1)
        oddCount++; 
    
    return oddCount;
};