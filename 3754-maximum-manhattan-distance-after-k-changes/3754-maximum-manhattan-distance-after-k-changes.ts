function maxDistance(s: string, k: number): number {
    let maxDistance: number = 0;
    const pos: [number, number] = [0, 0];
    const movementsCnt: {
        'N': number, 
        'S': number, 
        'W': number, 
        'E': number
    } = { 
        'N': 0, 
        'S': 0, 
        'W': 0, 
        'E': 0 
    };

    for (const move of s) {
        // update current position
        if (move === 'N') {
            pos[1]++;
        } else if (move === 'S') {
            pos[1]--;
        } else if (move === 'E') {
            pos[0]++;
        } else if (move === 'W') {
            pos[0]--;
        }

        // increase the movements count
        movementsCnt[move]++;

        // calc current distance from the origin
        let remainingChanges: number = k;
        let currDistance: number = Math.abs(pos[0]) + Math.abs(pos[1]);

        // obtain maximum vertical movements
        {
            const changes: number = Math.min(movementsCnt['N'], movementsCnt['S'], remainingChanges);

            currDistance += 2 * changes;
            remainingChanges -= changes;
        }

        // obtain maximum horizontal movements
        {
            const changes: number = Math.min(movementsCnt['W'], movementsCnt['E'], remainingChanges);

            currDistance += 2 * changes;
            remainingChanges -= changes;
        }

        // update maximum distance so far
        maxDistance = Math.max(currDistance, maxDistance);
    }


    return maxDistance;
};
