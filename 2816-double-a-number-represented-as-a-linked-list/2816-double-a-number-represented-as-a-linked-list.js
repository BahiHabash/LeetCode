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
const doubleIt = function(head) { // Time : O(n) | Space : O(1) | n : number of digits
    const reversedLL = reverseLL(head);
    let prev
      , curr = reversedLL
      , carry = 0;

    while (curr || carry) {
        if (curr) {
            const doublingNum = curr.val * 2 + carry;
            if (doublingNum < 9)
                curr.val = doublingNum;
            else
                curr.val = doublingNum % 10;
            carry = Math.floor(doublingNum / 10);
        }
        else {
            curr = new ListNode(carry);
            prev.next = curr;
            carry = 0;
        }

        prev = curr;
        curr = curr.next;
    }

    return reverseLL(reversedLL);
};

/**
* @param {ListNode} head
* @return {ListNode}
*/
const reverseLL = function(head) {
    let prev = null;
    let curr = head;
    let next;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}