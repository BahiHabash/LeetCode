/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
const splitListToParts = function(head, k) {
    const len = getLength(head);
    const lenOfPart = Math.floor(len / k);
    let mod = len % k;

    const arr = [];
    let curr = head;

    for (let i = 0; i < k; i++) {
        let partHead = curr;
        let partLen = lenOfPart + (mod > 0 ? 1 : 0);  // Distribute extra nodes if mod > 0
        mod--;

        for (let j = 0; j < partLen - 1 && curr !== null; j++) {
            curr = curr.next;
        }

        if (curr !== null) {
            let next = curr.next;
            curr.next = null;  // Break the link to form the current part
            curr = next;
        }

        arr.push(partHead);
    }

    return arr;
};

const getLength = function(head) {
    let length = 0;
    let curr = head;
    
    while (curr) {
        length++;
        curr = curr.next;
    }

    return length;
};
