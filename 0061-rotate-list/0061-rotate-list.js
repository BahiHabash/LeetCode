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
    if (!head?.next) return head;

    let len = 0; 
    let [prev, curr] = [null, head];

    while (curr) {
        prev = curr;
        curr = curr.next;
        len++;
    }

    const lastNode = prev;
    let newHead = head;
    k %= len;

    if (!k) return head;

    for (let i = 1; i < (len - k); i++) {
        newHead = newHead.next;
    }

    const newLastNode = newHead;
    newHead = newHead?.next;
    newLastNode.next = null;

    lastNode.next = head;

    return newHead;
};
