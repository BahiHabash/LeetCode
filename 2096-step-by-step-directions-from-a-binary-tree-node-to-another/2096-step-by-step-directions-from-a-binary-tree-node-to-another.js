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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
const getDirections = function(root, startValue, destValue) { // Time : O(n), Space : O(h) => h : hight of the tree
    const startValuePath = getPathOf(root, startValue);
    const destValuePath = getPathOf(root, destValue);
    
    // staring is the root of the tree
    if (!startValuePath) {
        return destValuePath;
    }
    // staring is parent of destination
    if (!destValuePath) {
        return 'U'.repeat(startValuePath.length);
    }

    // pick parent of staring and destination node
    let parentIndex = 0;
    while (startValuePath[parentIndex] === destValuePath[parentIndex]) {
        parentIndex++;
    } 

    // staring is parent of destination
    if (!startValuePath.slice(parentIndex)) {
        return destValuePath.slice(parentIndex);
    } 
    // destination is parent of staring
    if (!destValuePath.slice(parentIndex)) {
        return 'U'.repeat(startValuePath.length - parentIndex);
    } 
    // staring and destination are children of a common parent
    return 'U'.repeat(startValuePath.length - parentIndex) + destValuePath.slice(parentIndex);
};

/** get root of a target node that have specific value starting from the root
 * @param {TreeNode} root root of the tree
 * @param {number} target target node's value
 * @param {string} path current path of the target node starting from the root 
 * @return {strign} the path of the target node starting from the root
 */
const getPathOf = function(root, target, path = '') {
    // target not in this path
    if (!root) return '';

    // target founded
    if (root.val === target) return path;

    return getPathOf(root.left, target, path + 'L') || getPathOf(root.right, target, path + 'R');
};
