function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
    const availableBaskets: boolean[] = new Array(baskets.length).fill(true);

    let num: number = 0;

    for (const fruit of fruits) {
        num++;

        for (const [i, basket] of baskets.entries()) {
            if (availableBaskets[i] && (basket >= fruit)) {
                availableBaskets[i] = false;
                num--;
                break;
            }
        }
    }

    return num;
};