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
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let slow = head;
    let fast = head;

    for (let i = 1; i <= n; i++)
        fast = fast.next;

    while (fast) {
        fast = fast.next;
        prev = slow;
        slow = slow.next;
    }

    deleteNode(prev, slow);

    return dummy.next;    
};

/**
* @param {ListNode} prev
* @param {ListNode} curr
 */
const deleteNode = function(prev, curr) {
    prev.next = curr.next;
    delete curr;
};