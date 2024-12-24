/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
    const dummy = new ListNode(null, head);
    
    while (head && head.next) {
        if (head.val === head.next.val) {
            deleteNode(head, head.next);
        } else {
            head = head.next;
        }
    }

    return dummy.next;
};


const deleteNode = function(prev, node) {
    if (!prev) return null;

    prev.next = node.next;
    delete node;

    return prev;
};