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
 * @param {number} distance
 * @return {number}
 */
const countPairs = function(root, distance) {
    const leavesPathes = [];
    getLeavesPathes(root, leavesPathes);
    leavesPathes.sort((a, b) => a.localeCompare(b));

    let numOfGoodLeafNodePairs = 0;

    for (let i = 0; i < leavesPathes.length - 1; i++) {
        for (let j = i + 1; j < leavesPathes.length; j++) {
            const [path1, len1, path2, len2] =  [leavesPathes[i], leavesPathes[i].length, leavesPathes[j], leavesPathes[j].length];
            
            let index = 0;
            while (index < len1 && index < len2 && path1[index] === path2[index]) index++;

            numOfGoodLeafNodePairs += ((len1 - index) + (len2 - index) <= distance);
        }
    }

    return numOfGoodLeafNodePairs;
};

const getLeavesPathes = function(root, leavesPathes, currPath = '') {
    if (!root) return;

    if (isLeafNode(root)) {
        leavesPathes.push(currPath);
        return;
    }

    getLeavesPathes(root.left, leavesPathes, currPath + 'L');
    getLeavesPathes(root.right, leavesPathes, currPath + 'R');
};

const isLeafNode = function(node) {
    return node && !node.left && !node.right;
};