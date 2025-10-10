function maximumEnergy(energy: number[], k: number): number {
    const absorbedEnergy = new Map<number, number>();

    for (const [i, currEnergy] of energy.entries()) {
        const groupId: number = i % k;
        const groupEnergy: number = absorbedEnergy.get(groupId) || 0;

        absorbedEnergy.set(groupId,  
            Math.max(currEnergy, currEnergy + groupEnergy)
        );
    }

    let maxEnergy: number = -Infinity;

    for (const groupEnergy of absorbedEnergy.values()) {
        maxEnergy = Math.max(groupEnergy, maxEnergy);
    }

    return maxEnergy;
};