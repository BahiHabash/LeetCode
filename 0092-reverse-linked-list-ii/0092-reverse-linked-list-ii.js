/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function(head, l, r) {
    const valuesArr = arrayFromLLinkedist(head);
    reverseArrayBetween(valuesArr, l - 1, r - 1);
    return linkedListFromArray(valuesArr);
};

const arrayFromLLinkedist = function(head) {
    const arr = [];

    while(head) {
        arr.push(head.val);
        head = head.next;
    }

    return arr;
};

const linkedListFromArray = function(arr) {
    if (!arr.length) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}


const reverseArrayBetween = function(arr, l, r) {
    while (l < r) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++, r--;
    }
};

