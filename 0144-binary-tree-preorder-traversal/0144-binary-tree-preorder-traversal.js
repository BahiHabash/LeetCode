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
const preorderTraversal = function(root, preOrder = []) {
    if (!root)
        return preOrder;
    
    preOrder.push(root.val);
    preorderTraversal(root.left, preOrder);
    preorderTraversal(root.right, preOrder);
    
    return preOrder;
};