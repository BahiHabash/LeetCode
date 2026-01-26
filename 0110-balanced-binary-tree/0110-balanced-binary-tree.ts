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


function isBalanced(root: TreeNode | null): boolean {
    let balanced: boolean = true;

    function getDepth(root: TreeNode | null, currDepth: number = 0): number {
        if (!root || !balanced) {
            return currDepth;
        }

        const leftDepth: number = getDepth(root.left, currDepth + 1);
        const rightDepth: number = getDepth(root.right, currDepth + 1);

        balanced &&= (Math.abs(leftDepth - rightDepth) < 2);

        return Math.max(leftDepth, rightDepth);
    };

    getDepth(root);

    return balanced;
};
