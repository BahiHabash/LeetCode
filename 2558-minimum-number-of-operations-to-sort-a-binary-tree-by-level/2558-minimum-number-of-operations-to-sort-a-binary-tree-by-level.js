/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minimumOperations = function(root) {
    const queue = [root];
    let minOperations = 0;

    while (queue.length) {
        let size = queue.length;
        let level = [];

        while (size--) {
            const removedNode = queue.shift();
            level.push(removedNode);

            if (removedNode.left) {
                queue.push(removedNode.left);
            }
            if (removedNode.right) {
                queue.push(removedNode.right);
            }
        }
        
        minOperations += minSwapsToSort( level.map(root => root.val) );
    }

    return minOperations;
};

function minSwapsToSort(arr) {
    let swaps = 0;
    // {val, idx} sorted based on val ascending
    const sortedPairs = arr.map((val, idx) => ({val, idx})).sort((a, b) => a.val - b.val);

    for (let i = 0; i < arr.length; i++) {
        const curr = sortedPairs[i];
        if (curr.idx === i) continue; // if in the right index

        const toSwapWith = sortedPairs[curr.idx];
        [sortedPairs[curr.idx], sortedPairs[toSwapWith.idx]] = [sortedPairs[toSwapWith.idx], sortedPairs[curr.idx]];
        swaps++;
        i--;
    }

    return swaps;
};