function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const ans: number[] = [];
    potions.sort((a, b) => b - a); // DESC

    for (const spell of spells) {
        const successPairs: number = successPairsCnt(spell); 
        ans.push(successPairs);
    }

    return ans;

    function successPairsCnt(spell: number): number {
        const target: number = Math.ceil(success / spell);
        let l: number = 0;
        let r: number = potions.length - 1;
        let idx: number = -1;

        while (l <= r) {
            const mid: number = l + Math.floor((r - l) / 2);

            if (potions[mid] < target) {
                r = mid - 1;
            } else {
                idx = mid;
                l = mid + 1;
            }
        } 

        return idx + 1;
    }
};