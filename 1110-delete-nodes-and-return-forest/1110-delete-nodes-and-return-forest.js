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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
const delNodes = function(root, to_delete) { // Time : O(n), Space : O(n)
    const roots = new Set([root]);
    const treeMap = new Map(); // {val: node}

    treeToMap(root, treeMap);

    for (const toBeDeletedRootVal of to_delete) {
        const {ref : toBeDeletedRoot, itsParent, dir} = treeMap.get(toBeDeletedRootVal);

        // delete the node froms roots if exited
        if (roots.has(toBeDeletedRoot)) {
            roots.delete(toBeDeletedRoot);
        }
        
        // set the node's children as roots if they are existed
        if (toBeDeletedRoot.left) roots.add(toBeDeletedRoot.left);
        if (toBeDeletedRoot.right) roots.add(toBeDeletedRoot.right);

        // remove the node
        treeMap.delete(toBeDeletedRoot);
        if (itsParent) {
            if (dir === 'L') itsParent.left = null;
            else itsParent.right = null;
        }

    }

    return [...roots];
};

const treeToMap = function(root, map, itsParent = null, dir = null) {
    if (!root) return;

    map.set(root.val, {
        ref : root, 
        itsParent,
        dir 
    });

    treeToMap(root.left, map, root, 'L');
    treeToMap(root.right, map, root, 'R');
};