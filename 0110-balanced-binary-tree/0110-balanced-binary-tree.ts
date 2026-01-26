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

    function assignHeights(root: TreeNode): number {
        if (!root) {
            return 0;
        }
        
        const leftDepth: number = assignHeights(root.left);
        const rightDepth: number = assignHeights(root.right);
        const heightDiff: number = Math.abs(leftDepth - rightDepth);

        balanced &&= heightDiff < 2;

        return Math.max(leftDepth, rightDepth) + 1;
    };

    assignHeights(root);
    
    return balanced;
};

