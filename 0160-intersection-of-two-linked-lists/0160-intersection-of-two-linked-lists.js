/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) { // O(n + m) time | O(1) space
    // mark list A
    markList(headA);    
    // get intersection node if exited
    const intersectionNode = checkIntersectionNode(headB); 
    // remove mark from list A
    markList(headA);    

    return intersectionNode;
};

// mark the list by make its values become the opisite sign
const markList = function(head) {
    currNode = head;
    while (currNode) {
        currNode.val *= -1;
        currNode = currNode.next;
    }
}

// get intersection node if it's exited
const checkIntersectionNode = function(head) {
    currNode = head;
    while (currNode) {
        if (currNode.val < 0)
            return currNode;
        currNode = currNode.next;
    }
    return null;
}
