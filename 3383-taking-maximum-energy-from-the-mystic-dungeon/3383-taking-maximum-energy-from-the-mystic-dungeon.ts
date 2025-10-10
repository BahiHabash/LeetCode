function maximumEnergy(energy: number[], k: number): number {
    const len: number = energy.length; 
    const absorbedEnergy: number[] = new Array(len).fill(-Infinity);

    for (let i = 0; i < len; i++) {
        const absEnrgIdx: number = i % k;

        if (
            (absorbedEnergy[absEnrgIdx] === -Infinity) ||
            ((absorbedEnergy[absEnrgIdx] < 0) && (energy[i] < 0))
        ) {
            absorbedEnergy[absEnrgIdx] = energy[i];
        } else {
            absorbedEnergy[absEnrgIdx] = Math.max(0, absorbedEnergy[absEnrgIdx]);
            absorbedEnergy[absEnrgIdx] += energy[i];
        }
    }

    return Math.max(...absorbedEnergy);
};