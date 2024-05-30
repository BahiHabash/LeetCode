/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function(root1, root2) { // Time : O(n + m), Space : O(n + m)
    const root1Leaves = [];
    const root2Leaves = [];
    getLeaves(root1, root1Leaves);
    getLeaves(root2, root2Leaves);

    if (root1Leaves.length !== root2Leaves.length) return false;

    for (let i = 0; i < root1Leaves.length; i++)
        if (root1Leaves[i] !== root2Leaves[i]) return false;

    return true;
};

/**
 * @param {TreeNode} root root of the tree
 * @param {number[]} arr array that will store leaf nodes into it
 */
const getLeaves = function(root, arr) {
    if (!root) return;
    
    if (isLeaf(root)) arr.push(root.val);

    getLeaves(root.left, arr);
    getLeaves(root.right, arr);
};

/**
 * @param {TreeNode} node node of the tree
 * @return {boolean} True if the node is a leaf node, False otherwise
 */
const isLeaf = function(node) {
    return node && !node.left && !node.right;
};

