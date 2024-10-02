/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = function(arr) {
    const sortedUniqueElements = [...new Set(arr)].sort((a, b) => a - b);
    const elementsRank = new Map();

    sortedUniqueElements.forEach((element, i) => {
        elementsRank.set(element, i + 1);
    });

    return arr.map(element => elementsRank.get(element));
};