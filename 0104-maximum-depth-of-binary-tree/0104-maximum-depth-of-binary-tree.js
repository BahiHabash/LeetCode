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
const maxDepth = function(root, currDepth = 0) {
    if (!root)
        return currDepth;
    return Math.max(maxDepth(root.left, currDepth + 1), maxDepth(root.right, currDepth + 1));
};