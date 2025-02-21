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
    * @param {Number} val
    * @return {TreeNode}
    */
    recover(root, val = 0) {
        if (!root) return;

        this.nums.add(val);
        this.recover(root.left, val * 2 + 1);
        this.recover(root.right, val * 2 + 2);
    }
};


/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */