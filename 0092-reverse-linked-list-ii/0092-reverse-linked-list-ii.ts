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

    let currPos: number = 1;
    let prev: ListNode | null = dummyHead;
    let leftPartEnd: ListNode | null;
    let rightPartStart: ListNode | null;
    let targetListStart: ListNode;
    let targetListEnd: ListNode;

    while (currPos < left) {
        prev = head;
        head = head.next;
        currPos++
    }

    leftPartEnd = prev;
    targetListStart = head;

    while (currPos < right) {
        prev = head;
        head = head.next;
        currPos++;
    }

    targetListEnd = head;
    rightPartStart = head.next;
    targetListEnd.next = null;

    reverseLinkedList(targetListStart);

    leftPartEnd.next = targetListEnd;
    targetListStart.next = rightPartStart;

    return dummyHead.next;
};

/**
 * @return ListNode new head
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