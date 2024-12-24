/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function(head, k) {
    const len = getLength(head);
    k %= len;  // romove unnecessary rotaions cycles

    if (!k) return head;

    const lastNode = getNthNode(head, len);
    const newTail = getNthNode(head, len - k);
    const newHead = newTail.next;

    newTail.next = null;   // cut the tail
    lastNode.next = head;  // link the tail with head

    return newHead;
};

const getLength = function(head) {
    let len = 0;

    while (head) {
        head = head.next;
        len++;
    }

    return len;
};

const getNthNode = function(head, n) {
    for (let i = 1; i < n; i++) {
        head = head.next;
    }

    return head;
}
