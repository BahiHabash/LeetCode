/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode();
    let head = dummy;
    let curr1 = list1;
    let curr2 = list2;

    while (curr1 && curr2) {
        if (curr1.val <= curr2.val) {
            head.next = new ListNode(curr1.val);
            curr1 = curr1.next;
        } else {
            head.next = new ListNode(curr2.val);
            curr2 = curr2.next;
        }

        head = head.next;
    }

    while (curr1) {
        head.next = new ListNode(curr1.val);
        curr1 = curr1.next;
        head = head.next;
    }

    while (curr2) {
        head.next = new ListNode(curr2.val);
        curr2 = curr2.next;
        head = head.next;
    }

    return dummy.next;
};