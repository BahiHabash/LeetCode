/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function(score) { // Time : O(n * log(n)) | Space : O(1) -> if we ignore space of sorting
    const map = new Map();
    ([...score].sort((a, b) => b - a)).forEach((n, i)=> map.set(n, i + 1));
    return score.map((n) => {
        switch (map.get(n)){
            case 1 : 
                return "Gold Medal";
            case 2 :
                return "Silver Medal";
            case 3 :
                return "Bronze Medal";
            default :
                return `${map.get(n)}`;
        }
    })
};