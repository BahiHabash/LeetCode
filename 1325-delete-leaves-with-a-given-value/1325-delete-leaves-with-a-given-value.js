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
 * @param {number} target
 * @return {TreeNode}
 */
const removeLeafNodes = function(root, target) {
    return removeLeafNodesHelper(root, target);
};
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode} root
 */
const removeLeafNodesHelper = function(root, target) {
    if (root) {
        removeLeafNodesHelper(root.left, target);
        removeLeafNodesHelper(root.right, target);
        
        if (root.left?.val === target && isLeaf(root.left)) {
            const next = root.left;
            delete next;
            root.left = null;
        }
        if (root.right?.val === target && isLeaf(root.right)){
            const next = root.right;
            delete next;
            root.right = null;
        }
        if (root.val === target && isLeaf(root)){
            delete root;
            root = null;
        }
    }
    return root;
}

/**
 * @param {TreeNode} root
 * @return {Boolean}
 */
const isLeaf = function(root) {
    return root && !root.left && !root.right;
};