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
    console.log(startValuePath, destValuePath)
    
    // pick parent of staring and destination node
    let parentIndex = 0;
    while (parentIndex < startValuePath.length && parentIndex < destValuePath.length &&
           startValuePath[parentIndex] === destValuePath[parentIndex]
          ) parentIndex++;
    
    // staring is the root of the tree
    if (!startValuePath) {
        return destValuePath;
    }
    // staring is parent of destination
    else if (!destValuePath) {
        return 'U'.repeat(startValuePath.length);
    }
    // staring is parent of destination
    else if (!startValuePath.slice(parentIndex)) {
        return destValuePath.slice(parentIndex);
    } 
    // destination is parent of staring
    else if (!destValuePath.slice(parentIndex)) {
        return 'U'.repeat(startValuePath.length - parentIndex);
    } 
    // staring and destination are children of a common parent
    else {
        return 'U'.repeat(startValuePath.length - parentIndex) + destValuePath.slice(parentIndex);
    }
};

const getPathOf = function(root, target, path = '') {
    // target not in this path
    if (!root) return '';

    // target founded
    if (root.val === target) return path;

    return getPathOf(root.left, target, path + 'L') || getPathOf(root.right, target, path + 'R');
};
