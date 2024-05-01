/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function(n, trust) {
    if(trust.length === 0)     // handle when trust is empty array
        return n === 1 ? 1 : -1;
    
    const trustMap = new Map();// person : set of people he trusts on
    trust.forEach(rel => trustMap.set(rel[0], (trustMap.get(rel[0]) || new Set()).add(rel[1])));
    
    if (trustMap.size !== n - 1)// if not everybody trust on at least a person
        return -1;
    
    for(let i = 1; i <= n; i++) {
        if (! trustMap.has(i)) {// may be a judge
            return isTrustedByAll(trustMap, i) ? 1 : -1;
        }
    }
    
    return -1;
};

/**
 * @param {map} people
 * @param {number} person
 * @return {boolean}
 */
const isTrustedByAll = function(people, person) {
    for (const trustedPeople of people.values()) {
        if (! trustedPeople.has(person))
            return false;
    }
    return true;
}
