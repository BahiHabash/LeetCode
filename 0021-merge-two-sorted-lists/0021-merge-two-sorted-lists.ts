/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;

    const dummy: ListNode = new ListNode();
    let node = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            node.next = new ListNode(list1.val);
            node = node.next;
            list1 = list1.next;
        } else {
            node.next = new ListNode(list2.val);
            node = node.next;
            list2 = list2.next;
        }
    }

    if (list1) {
        node.next = list1;
    } else if (list2) {
        node.next = list2;
    }

    return dummy.next;
};