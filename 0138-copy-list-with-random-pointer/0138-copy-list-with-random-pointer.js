/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function(head) {
    const listMap = new Map();

    let currNode = head;
    while (currNode) {
        const newNode = new Node(currNode.val);
        listMap.set(currNode, newNode);
        currNode = currNode.next;
    }

    for (const [oldNode, newNode] of listMap.entries()) {
        newNode.next = oldNode.next ? listMap.get(oldNode.next) : null;
        newNode.random = oldNode.random ? listMap.get(oldNode.random) : null;
    }

    return listMap.get(head) || null;
};
