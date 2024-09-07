/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSubPath = function(head, root) {
    // Helper function to check if we can match the linked list starting from the current tree node
    const matchPath = (head, root) => {
        if (!head) return true;  // Successfully matched all linked list nodes
        if (!root) return false; // Reached the end of the tree without completing the match
        if (root.val !== head.val) return false; // Mismatch of values

        // Continue matching down both left and right subtree paths
        return matchPath(head.next, root.left) || matchPath(head.next, root.right);
    };

    if (!root) return false; // If the tree is empty, no path exists

    // Start matching from the current node, or search the left and right subtrees
    return matchPath(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right);
};
