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
function nodesBetweenCriticalPoints(head) { // Time : O(n), Space : O(n)
    const citicalPointsPosition = getCriticalPointPositions(head);
    
    if (citicalPointsPosition.length >= 2) {
         let minDistance = Infinity
          , maxDistance = citicalPointsPosition.at(-1) - citicalPointsPosition.at(0);

        for (let i = 1; i < citicalPointsPosition.length; i++) {
            minDistance = Math.min(citicalPointsPosition[i] - citicalPointsPosition[i - 1], minDistance);
        }  
        
        return [minDistance, maxDistance];      
    }
    
    return [-1, -1];

};

function getCriticalPointPositions(head) {
    const citicalPointsPosition = [];
    let prev = null
      , curr = head
      , next = head.next
      , position = 0;
    
    while (curr) {
        position++;

        if (isCriticalPoint(prev, curr, next)) {
            citicalPointsPosition.push(position);
        }

        prev = curr;
        curr = curr.next;
        next = curr?.next;
    }


    return citicalPointsPosition;
}

function isCriticalPoint(prev, curr, next) {
    return prev && curr && next &&
        ((prev.val > curr.val && curr.val < next.val) || (prev.val < curr.val && curr.val > next.val))
}