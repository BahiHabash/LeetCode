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

function sumRootToLeaf(root: TreeNode | null): number {
    if (!root) return 0;

    let totalSum: number = 0;

    function isLeafNode(root: TreeNode | null): boolean {
        return !root.left && !root.right;
    };

    function addSum(binary: string): void {
        totalSum += parseInt(binary, 2);
    };

    function dfs(root: TreeNode | null, path: string = ''): void {
        const currPath: string = path + root.val;

        if (isLeafNode(root)) {
            addSum(currPath);
            return;
        }

        if (root.left) {
            dfs(root.left, currPath);
        }

        if (root.right) {
            dfs(root.right, currPath);
        }
    };

    dfs(root);

    return totalSum;
};