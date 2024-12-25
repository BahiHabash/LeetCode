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
const largestValues = function(root) { // Time : O(n), Space : O(h) -> h : height of the tree
    const maxValPerLevel = [];

    DFS(root, maxValPerLevel);

    return maxValPerLevel;
};

const DFS = function(root, maxValPerLevel, height = 0) {
    if (!root) return;

    // update max value in curr row
    maxValPerLevel[height] = Math.max(root.val, maxValPerLevel[height] ?? -Infinity);

    // Apply DFS to the cildren
    DFS(root.left, maxValPerLevel, height + 1);
    DFS(root.right, maxValPerLevel, height + 1);
};