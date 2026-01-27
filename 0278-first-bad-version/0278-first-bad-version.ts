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
        let rounds: number = Math.ceil(Math.log2(n)) + 1;
        let ans: number;

        while (rounds--) {
            const mid: number = Math.floor((l + r) / 2);

            if (!isBadVersion(mid)) {
                l = mid + 1;
            } else {
                ans = mid;
                r = mid - 1;
            }
        }

        return ans;
    };
};