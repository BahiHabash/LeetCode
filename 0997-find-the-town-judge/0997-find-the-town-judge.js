/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function(n, trust) {
    if(trust.length === 0) {
        return n === 1 ? 1 : -1;
    }
    
    const trustMap = new Map();
    trust.forEach(rel => trustMap.set(rel[0], (trustMap.get(rel[0]) || new Set()).add(rel[1])));
    
    if (trustMap.size !== n - 1)
        return -1;
    
    for(let i = 1; i <= n; i++) {
        if (! trustMap.has(i)) {
            for (const trustedPeople of trustMap.values()) {
                if (! trustedPeople.has(i))
                    return -1;
            }
            return i;
        }
    }
    
    return -1;
};