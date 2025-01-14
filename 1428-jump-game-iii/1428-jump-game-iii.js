/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
function canReach(arr, start) {
    const visited = new Array(arr.length).fill(false);

    function DFS(i) {
        if (arr[i] === 0) return true;
        if (visited[i] || i < 0 || i > arr.length) return false;

        visited[i] = true;
        
        return DFS(i + arr[i]) || DFS(i - arr[i]);
    }

    return DFS(start);
}