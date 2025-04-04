/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
    function dfs(node: TreeNode | null): [TreeNode | null, number] {
        if (!node) return [null, 0];

        const [leftLCA, leftDepth] = dfs(node.left);
        const [rightLCA, rightDepth] = dfs(node.right);

        if (leftDepth === rightDepth) {
            return [node, leftDepth + 1];
        } else if (leftDepth > rightDepth) {
            return [leftLCA, leftDepth + 1];
        } else {
            return [rightLCA, rightDepth + 1];
        }
    }

    return dfs(root)[0];
}