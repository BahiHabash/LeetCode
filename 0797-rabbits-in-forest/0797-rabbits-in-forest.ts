function numRabbits(answers: number[]): number {
    const ansFreq = new Array<number>(1000).fill(0);

    for (const ans of answers) ansFreq[ans]++;

    let minRabbits: number = 0;
    
    for (const [ans, freq] of ansFreq.entries()) {
        minRabbits += Math.ceil(freq / (ans + 1)) * (ans + 1);
    }

    return minRabbits;
};