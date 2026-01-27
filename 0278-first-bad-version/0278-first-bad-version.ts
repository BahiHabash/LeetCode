/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {
    return function(n: number): number {
        let l: number = 1;
        let r: number = n;

        while (l <= r) {
            const mid: number = Math.floor((l + r) / 2);
            const prev: boolean = isBadVersion(mid - 1);
            const curr: boolean = isBadVersion(mid);

            if (!prev && curr) {
                return mid; 
            } else if (!prev && !curr) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    };
};