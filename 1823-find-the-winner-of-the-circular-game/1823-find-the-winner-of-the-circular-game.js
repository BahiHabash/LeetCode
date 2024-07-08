/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findTheWinner = function(n, k) {
    let currFrinedIdx = 0
      , friends = new Array(n).fill(null).map((_, i) => i + 1);
    
    while (friends.length > 1) {
        currFrinedIdx = (currFrinedIdx + k - 1) % friends.length;
        friends.splice(currFrinedIdx, 1);
    }
    
    return friends[0];
};