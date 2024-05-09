/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let curr = head;

    while (curr) {
        if (curr.val === val){
            curr = removeNode(prev, curr);
        }
        else {
            prev = curr;
            curr = curr.next;
        }
    }

    return dummy.next;
};

const removeNode = function(prev, node) {
    if(prev && node)
        prev.next = node.next;
    return prev;
}