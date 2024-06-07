/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
const isNStraightHand = function(hand, groupSize) { // Time : O(n), Space : O(num of distinct numbers)
    const groupsNum = hand.length / groupSize;
    
    // no-way to divide cards into equal groups' size
    if (groupsNum !== Math.trunc(groupsNum)) return false;
    
    // creat map to store numFrequncy {num : freq}
    const numFreq = new Map();
    for (const cardNum of hand) 
        numFreq.set(cardNum, (numFreq.get(cardNum) ?? 0) + 1);
    
    // sort the distinict numbers to keep track the minimum number so far
    hand = [...numFreq.keys()].sort((a, b) => a - b);

    for (let i = groupsNum; i > 0; i--) {
        
        let n = hand[0];
        let init = hand[0]; // initial number the group will start with
        while (n < init + groupSize) {
            if (!numFreq.has(n))
                return false;
            
            numFreq.set(n, numFreq.get(n) - 1);

            if (numFreq.get(n) === 0) {
                if (n !== hand[0]) 
                    return false;
                
                numFreq.delete(n);
                hand.shift();
            }

             n++;
        }
    }

    return true;
};
