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
const reverseBetween = function(head, left, right) {
    const values = getValuesBetween(head, left, right);
    let [node, i] = [head, 1];
    
    while (i < left) {
        node = node.next;
        i++;
    }

    while (i <= right) {
        node.val = values.pop();
        node = node.next;
        i++;
    }

    return head;
};

const getValuesBetween = function(head, left, right) {
    const values = [];
    let i = 1;
    
    while (i < left) {
        head = head.next;
        i++;
    }

    while (i <= right) {
        values.push(head.val);
        head = head.next;
        i++;
    }

    return values;
};


