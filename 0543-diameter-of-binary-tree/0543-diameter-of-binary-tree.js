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
const diameterOfBinaryTree = function(root) {
    let diameter = { val: 0 };
    setDiameter(root, diameter);
    return diameter.val;
};

const setDiameter = function(root, diameter) {
    if (!root) return 0;

    const leftMaxDepth = setDiameter(root.left, diameter);
    const rightMaxDepth = setDiameter(root.right, diameter);
    diameter.val = Math.max(diameter.val, leftMaxDepth + rightMaxDepth);

    return 1 + Math.max(leftMaxDepth, rightMaxDepth);
};