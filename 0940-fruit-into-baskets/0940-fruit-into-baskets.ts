function totalFruit(fruits: number[]): number {
    const prefixArr: [number, number][] = []; // [fruitType, sum]

    for (let i = 0; i < fruits.length; i++) {
        let sum = 1;

        while (fruits[i] === fruits[i + 1]) {
            sum++;
            i++;
        }

        prefixArr.push([fruits[i], sum]);
    }

    let maxCollectedFruits: number = 0;
    
    for (let i = 0; i < prefixArr.length; i++) {
        let currCollectedFruits: number = prefixArr[i][1] + (prefixArr[i - 1]?.[1] ?? 0);
        let type1: number = prefixArr[i][0];
        let type2: number = prefixArr[i - 1]?.[0] ?? -1;
        
        for (let j = i + 1; j < prefixArr.length; j++) {
            if ((prefixArr[j][0] === type1) || (prefixArr[j][0] === type2)) {
                currCollectedFruits += prefixArr[j][1];
            } else {
                break;
            }
        }

        maxCollectedFruits = Math.max(currCollectedFruits, maxCollectedFruits);
    }

    return maxCollectedFruits;
};