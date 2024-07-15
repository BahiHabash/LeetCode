/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
const createBinaryTree = function(descriptions) { // Time : O(n), Space : O(n)
    const nodes = new Map();     // {nodeVal : TreeNode}
    const children = new Set();

    for (const [parent, child, isLeft] of descriptions) {
        if (!nodes.has(parent)) {
            const parentRoot = new TreeNode(parent); // creat parent node
            nodes.set(parent, parentRoot);
        }
        
        if (!nodes.has(child)) {
            const childRoot = new TreeNode(child); // creat child node
            nodes.set(child, childRoot);
        }

        children.add(child); // update children set

        // link the parent and the child in the correct direction 
        isLeft ? nodes.get(parent).left = nodes.get(child) 
               : nodes.get(parent).right = nodes.get(child);
    }

    // get the root of the tree
    for (const currParent of nodes.keys()) {
        if (!children.has(currParent)){
            return nodes.get(currParent);
        }
    }
};