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
 * @return {number[]}
 */
const largestValues = function(root) { // Time : O(n), Space : O(w) -> w : max num of nodes in any row
    if (!root) return []; // filter out null trees

    const queue = [root];
    const largestValuePerRow = [];

    while (queue.length) {
        let currMax = -Infinity;
        let size = queue.length;

        while (size--) {
            const removedNode = queue.shift();
            currMax = Math.max(removedNode.val, currMax);
            
            // add children to the queue if existed
            if (removedNode.left) {
                queue.push(removedNode.left);
            }
            if (removedNode.right) {
                queue.push(removedNode.right);
            }
        }

        largestValuePerRow.push(currMax);
    }

    return largestValuePerRow;
};