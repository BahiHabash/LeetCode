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
    let steps = getLength(head) - n;
    let prev = dummy
    let curr = head;

    while (steps) {
        prev = curr;
        curr = curr.next;
        steps--;
    }

    deleteNode(prev, curr);

    return dummy.next;    
};

/**
* @param {ListNode} head
 */
const getLength = function(head) {
    let node = head
      , length = 0;
    while (node) {
        node = node.next;
        length++;
    }
    return length;
};

/**
* @param {ListNode} prev
* @param {ListNode} curr
 */
const deleteNode = function(prev, curr) {
    prev.next = curr.next;
    delete curr;
};