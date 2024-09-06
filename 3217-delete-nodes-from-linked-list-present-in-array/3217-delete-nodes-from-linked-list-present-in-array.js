/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
const modifiedList = function(nums, head) { // time : O(n), space : O(n)
    const numsToBeDeleted = new Set(nums);
    const dummy = new ListNode(null, head);
    let [prev, curr] = [dummy, head];

    while (curr) {
        if (numsToBeDeleted.has(curr.val)) {
            prev.next = curr.next;
            curr = prev.next; 
            continue;
        }
        prev = curr;
        curr = curr.next;
    }

    return dummy.next;
};