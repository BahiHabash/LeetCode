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
const insertGreatestCommonDivisors = function(head) {
    let currNode = head;

    while (currNode?.next) {
        const gcd = getGCD(currNode.val, currNode.next.val);
        insertNodeAfter(gcd, currNode);
        currNode = currNode.next.next;
    }

    return head;
};

/**
 * @param {number} val
 * @param {ListNode} prev
 */
const insertNodeAfter = function(val, prev) {
    const node = new ListNode(val, prev.next);
    prev.next = node;
    // return node;
};

const getGCD = function(num1, num2) {
    // Base case: If num2 is 0, return num1
    if (num2 === 0) {
        return num1;
    }
    // Recursive case: Call getGCD with (num2, num1 % num2)
    return getGCD(num2, num1 % num2);
};
