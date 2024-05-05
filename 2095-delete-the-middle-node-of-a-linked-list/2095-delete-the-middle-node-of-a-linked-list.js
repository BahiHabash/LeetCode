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
const deleteMiddle = function(head) {
    const dummy = new ListNode(0, head);
    let prev = dummy
      , slow = head
      , fast = head;
    
    while (fast && fast.next) { // get the middle node of the list
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
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
}