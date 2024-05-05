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
const swapNodes = function(head, k) {
    let curr = head;

    for (let i = 1; i < k; i++)
        curr = curr.next;

    const firstNode = curr;
    let secondNode = head;

    while (curr.next) {
        curr = curr.next;
        secondNode = secondNode.next;
    }   

    [firstNode.val, secondNode.val] = [secondNode.val, firstNode.val];

    return head;
};