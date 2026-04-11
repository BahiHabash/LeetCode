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
    // construct the new list
    const oldToNew: Map<_Node, _Node> = new Map();

    let original: _Node = head;
    let copy: _Node = new _Node();
    let dummyNew: _Node = copy;

    while (original) {
        const newNode: _Node = new _Node(original.val);

        oldToNew.set(original, newNode);

        copy.next = newNode;
        copy = copy.next;
        original = original.next;
    }


    // link the random pointer
    original = head;

    while (original) {
        const copy = oldToNew.get(original);
        copy.random = oldToNew.get(original.random) ?? null;
        original = original.next;
    }

    return dummyNew.next;
};