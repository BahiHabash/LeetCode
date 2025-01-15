/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
function amountOfTime(root, start) {
    // Handle edge cases
    if (!root || start === undefined ||  (!root.left && !root.right)) return 0;

    // Build the graph
    const graph = new Map();
    constructGraph(root, graph);

    // get time to reach all node using BFS
    return timeToReachAll(graph, start);
}

function constructGraph(root, graph, parent = null) {
    if (!root) return;

    const neighbors = [];

    if (parent) {
        neighbors.push(parent.val);
    }
    if (root.left) {
        neighbors.push(root.left.val);
        constructGraph(root.left, graph, root);
    }
    if (root.right) {
        neighbors.push(root.right.val);
        constructGraph(root.right, graph, root);
    }

    graph.set(root.val, neighbors);
}

function timeToReachAll(graph, start) {
    if (!graph.has(start)) return -1;

    let minute = -1;
    const queue = [start];
    const visited = new Set([start]);

    while (queue.length) {
        let size = queue.length;

        while (size--) {
            const node = queue.shift();

            // Add children to the queue (infect all adjacent nodes)
            for (const child of graph.get(node)) {
                if (!visited.has(child)) {
                    queue.push(child);
                    visited.add(child);
                }
            }
        }

        minute++;
    }

    return minute;
}