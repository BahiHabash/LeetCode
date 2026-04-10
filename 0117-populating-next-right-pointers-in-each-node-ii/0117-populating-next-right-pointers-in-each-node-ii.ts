/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 * 
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


function connect(root: _Node | null): _Node | null {
    if (!root) return root;

    const levels: _Node[][] = [];
    const queue: _Node[] = [root];

    while (queue.length) {
        let len: number = queue.length;
        const level: _Node[] = [];

        while (len--) {
            const node: _Node = queue.shift();
            level.push(node);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        levels.push(level);
    }
    
    for (const level of levels) {
        for (let i = 0; i < level.length - 1; i++) {
            const node = level[i];
            const rightNode = level[i + 1];
            node.next = rightNode;
        }
    }

    return root;
};