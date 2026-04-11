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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {  
    if (left >= right) {
        return head;
    }

    const dummyHead = new ListNode(0, head);

    let prev: ListNode | null = null;
    let subListHead: ListNode;
    let subListTail: ListNode;
    let part1End: ListNode | null;
    let part2Start: ListNode | null;

    for (let pos = 1; pos < right; pos++) {
        if (pos === left) {
            part1End = prev;
            subListHead = head;
        }

        prev = head;
        head = head.next;
    }

    subListTail = head;
    part2Start = head.next;
    subListTail.next = null;

    const [reversetListHead, reversetListEnd] = reverseLinkedList(subListHead);

    if (part1End) {
        part1End.next = reversetListHead;
    } else { // reversed from the first node
        dummyHead.next = reversetListHead;
    }

    // console.log([reversetListHead, reversetListEnd])
    reversetListEnd.next = part2Start;

    return dummyHead.next;
};

/**
 * @return ListNode new head, end
 */
function reverseLinkedList(head: ListNode): [ListNode, ListNode] {
    const end: ListNode | null = head;
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;
    let next: ListNode | null;

    while (curr) {
        next = curr?.next ?? null;

        curr.next = prev;
        
        prev = curr;
        curr = next;
        next = curr?.next;
    }

    return [prev, end];
}