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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let lca: TreeNode | null = null;

    function dfs(root: TreeNode | null): void {
        if (root && !lca) {
            if (p.val === root.val || q.val === root.val) { // any val match current
                lca = root;
            } else if (Math.max(p.val, q.val) < root.val) { // both are greater than current
                dfs(root.left);
            } else if (Math.min(p.val, q.val) > root.val) { // both are less than current
                dfs(root.right);
            } else { // current in the middle
                lca = root;
            }
        }     
    }

    dfs(root);

    return lca;
};