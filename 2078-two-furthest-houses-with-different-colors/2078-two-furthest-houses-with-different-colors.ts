function maxDistance(colors: number[]): number {
    let maxDistance: number = 0;

    for (let i = 0; i < colors.length; i++) {   
        for (let j = i + 1; j < colors.length; j++) {
            if (colors[i] !== colors[j]) {
                maxDistance = Math.max(j - i, maxDistance);
            }
        }
    }

    return maxDistance; 
};