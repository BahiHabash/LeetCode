/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class FindElements {
    /**
    * @param {TreeNode} root
    */
    constructor(root) {
        this.nums = new Set();

        root.val = 0;
        this.recover(root);
    }

    /** 
    * @param {number} target
    * @return {boolean}
    */
    find(target) {
        return this.nums.has(target);
    }

    /** 
    * @param {TreeNode} root
    * @param {Set[Number]} nums
    * @return {TreeNode}
    */
    recover(root) {
        if (!root) return;

        this.nums.add(root.val);

        if (root.left) {
            root.left.val = root.val * 2 + 1;
            this.recover(root.left);
        }

        if (root.right) { 
            root.right.val = root.val * 2 + 2;
            this.recover(root.right);
        }
    }
};


/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */