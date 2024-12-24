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
const swapPairs = function(head) {
    if (!head?.next) return head;

    const dummy = new ListNode(undefined, head);
    let [prev, node1, node2] = [dummy, head, head.next];

    while (node2) {
        node1.next = node2.next;
        node2.next = node1;
        prev.next = node2;

        prev = node1;
        node1 = node1.next;
        node2 = node1?.next;
    }

    return dummy.next;
};