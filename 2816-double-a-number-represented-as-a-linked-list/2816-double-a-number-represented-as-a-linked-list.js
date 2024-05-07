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
const doubleIt = function(head) { // Time : O(n) | Space : O(n) | n : number of digits
    let num = 0n;
    let node = head;

    while (node) {
        num *= 10n;
        num += BigInt(node.val);
        node = node.next;
    }

    return numToLL(num * 2n);
};

/**
* @param {number} num
* @return {ListNode}
 */
const numToLL = function(num) {
    const digits = [...('' + num)];
    const dummy = new ListNode(0);
    let node = dummy;

    for (const digit of digits) {
        node.next = new ListNode(+digit);
        node = node.next;
    }

    return dummy.next;
}

