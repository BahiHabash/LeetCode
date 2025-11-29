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

function minDiffInBST(root: TreeNode | null): number {
    const vals: number[] = [];
    taraverseTree(root, vals);
    vals.sort((a, b) => a - b);

    let minDiff = Infinity;
    
    for (let i = 1; i < vals.length; i++) {
        minDiff = Math.min(minDiff, vals[i] - vals[i - 1])
    }

    return minDiff;
};

function taraverseTree(root: TreeNode | null, vals): void {
    if (!root) return;

    vals.push(root.val);
    taraverseTree(root.left, vals);
    taraverseTree(root.right, vals);
}