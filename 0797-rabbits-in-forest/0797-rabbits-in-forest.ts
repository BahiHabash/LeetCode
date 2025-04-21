function numRabbits(answers: number[]): number {
    const ansFreq = {};

    for (const ans of answers) {
        ansFreq[ans] = (ansFreq[ans] ?? 0) + 1;
    }

    let minRabbits: number = 0;
    
    for (const ans in ansFreq) {
        const rabbitsPerGroup: number = +ans + 1;
        const numOfGroups: number = Math.ceil(ansFreq[ans] / rabbitsPerGroup);
        minRabbits += numOfGroups * rabbitsPerGroup;
    }

    return minRabbits;
};