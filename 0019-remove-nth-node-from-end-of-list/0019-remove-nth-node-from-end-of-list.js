/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(null, head);
    const len = getLength(head);
    let prev = dummy;

    for (let i = 1; i <= (len - n); i++) {
        prev = prev.next;
    }

    prev.next = prev?.next?.next;

    return dummy.next;
};

const getLength = function(node) {
    let len = 0;

    while (node) {
        len++;
        node = node.next;
    }

    return len;
}