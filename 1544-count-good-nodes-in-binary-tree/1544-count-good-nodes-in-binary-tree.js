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
function goodNodes(root) {
    let numOfGoodNodes = 0;

    ( function DFS(root, maxVal = 0) {
            if (!root) return;

            if (root.val >= maxVal) {
                numOfGoodNodes++;
                maxVal = root.val;
            }

            DFS(root.left, maxVal);
            DFS(root.right, maxVal);
        }
    ) (root, root.val);

    return numOfGoodNodes;
}

