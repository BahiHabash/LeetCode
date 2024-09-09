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
    const DEFAULT_VALUE = -1;
    const mat = Array.from({ length: m }, () => new Array(n).fill(DEFAULT_VALUE));
;
    
    let currNode = head;
    let [row, col] = [0, 0];

    while (currNode) {
        // right 
        while ((mat?.[row]?.[col] === DEFAULT_VALUE) && currNode) {
            mat[row][col++] = currNode.val;
            currNode = currNode.next;
        }
        row++, col--;

        // down 
        while ((mat?.[row]?.[col] === DEFAULT_VALUE) && currNode) {
            mat[row++][col] = currNode.val;
            currNode = currNode.next;
        }
        row--, col--;

        // left
        while ((mat?.[row]?.[col] === DEFAULT_VALUE) && currNode) {
            mat[row][col--] = currNode.val;
            currNode = currNode.next;
        }
        row--, col++;

        // up 
        while ((mat?.[row]?.[col] === DEFAULT_VALUE) && currNode) {
            mat[row--][col] = currNode.val;
            currNode = currNode.next;
        }
        row++, col++;
    }

    return mat;
};