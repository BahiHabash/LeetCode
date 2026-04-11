/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    // create the new list nodes
    const origianlToCopy: Map<_Node, _Node> = new Map();

    let originalCurrNode: _Node = head;

    while (originalCurrNode) {
        origianlToCopy.set(originalCurrNode, new _Node(originalCurrNode.val));
        originalCurrNode = originalCurrNode.next;
    }


    // link the nodes together
    originalCurrNode = head;

    while (originalCurrNode) {
        const copy = origianlToCopy.get(originalCurrNode);

        copy.next = origianlToCopy.get(originalCurrNode.next) ?? null;
        copy.random = origianlToCopy.get(originalCurrNode.random) ?? null;

        originalCurrNode = originalCurrNode.next;
    }

    return origianlToCopy.get(head);
};