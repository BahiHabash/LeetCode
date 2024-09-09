/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
const spiralMatrix = function(m, n, head) { // Time : O(m * n)
    const DEFAULT_VALUE = -1
        , DIRECTIONS = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        , mat = Array.from({ length: m }, () => new Array(n).fill(DEFAULT_VALUE));
    let [i, j, curr_dir, currNode] = [0, 0, 0, head];

    while (currNode) {
        mat[i][j] = currNode.val;
        let [newI, newJ] = [i + DIRECTIONS[curr_dir][0], j + DIRECTIONS[curr_dir][1]];

        if (newI < 0 || newJ < 0 || newI >= m || newJ >= n || mat[newI][newJ] !== DEFAULT_VALUE) {
            curr_dir = (curr_dir + 1) % DIRECTIONS.length;
            [newI, newJ] = [i + DIRECTIONS[curr_dir][0], j + DIRECTIONS[curr_dir][1]];
        }

        [i, j] = [newI, newJ];
        currNode = currNode.next;
    }

    return mat;
};