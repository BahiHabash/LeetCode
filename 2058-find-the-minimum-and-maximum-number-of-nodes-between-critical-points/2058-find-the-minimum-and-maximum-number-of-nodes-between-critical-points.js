/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
function nodesBetweenCriticalPoints(head) { // Time : O(n), Space : O(1) 
    let prev = null
      , curr = head
      , next = head.next

      , position = 0
      , criticalPositionsNum = 0
      , prevCriticalPointPosition
      , firstCriticalPointPosition

      , maxDistance = -1
      , minDistance = Infinity;
    
    while (curr) {
        position++;

        if (isCriticalPoint(prev, curr, next)) {
            criticalPositionsNum++;

            if (criticalPositionsNum >= 2) {
                minDistance = Math.min(position - prevCriticalPointPosition, minDistance);
            } else {
                firstCriticalPointPosition = position;
            }

            prevCriticalPointPosition = position;
        }
    
        prev = curr;
        curr = curr.next;
        next = curr?.next;
    }

    maxDistance = prevCriticalPointPosition - firstCriticalPointPosition;


    return criticalPositionsNum >= 2 ? [minDistance, maxDistance] : [-1, -1];
};

function isCriticalPoint(prev, curr, next) {
    return prev && curr && next &&
        ((prev.val > curr.val && curr.val < next.val) || (prev.val < curr.val && curr.val > next.val))
};