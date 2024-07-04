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
const mergeNodes = function(head) {
    let currNewNode = new ListNode();
    const newList = currNewNode;

    let currNode = head.next;
    let currSum = 0;

    while (currNode) {
        if (currNode.val === 0) {
            currNewNode.next = new ListNode(currSum);
            currNewNode = currNewNode.next;
            currSum = 0;
        } else {
            currSum += currNode.val;
        }

        currNode = currNode.next;
    }

    return newList.next;
};