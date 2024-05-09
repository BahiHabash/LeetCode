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
 * @return {number[]} postorder traversal Array
 */
const postorderTraversal = function(root) {
    const postOrderArr = [];
    postOrder(root, postOrderArr)
    return postOrderArr;
};

/**
 * @param {TreeNode} root root of the tree
 * @param {number[]} arr array of post order values
 */
const postOrder = function(root, arr) {
    if (root) {
        postOrder(root.left, arr);
        postOrder(root.right, arr);
        arr.push(root.val);
    }
}