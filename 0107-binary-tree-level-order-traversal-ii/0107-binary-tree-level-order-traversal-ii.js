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
 * @return {number[][]}
 */
const levelOrderBottom = function (root) {
    if (!root)
        return [];

    const levels = [];
    const queue = [root];

    while (queue.length) {
        const level = [];
        let size = queue.length;

        while (size--) {
            const node = queue.shift();
            level.push(node.val);

            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }

        levels.push(level);
    }

    return levels.reverse();
};