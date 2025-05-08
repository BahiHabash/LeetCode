interface State {
    x: number;
    y: number;
    sec: number;
}

function minTimeToReach(moveTime: number[][]): number {
    const n: number = moveTime.length;
    const m: number = moveTime[0].length;
    const minSec: number[][] = Array.from({ length: n }, 
        () => Array(m).fill(Infinity)
    );
    const visited: boolean[][] = Array.from({ length: n },
        () => Array(m).fill(false)
    );
    const directions: [number, number][] = [ [1, 0], [-1, 0], [0, 1], [0, -1] ];
    const minHeap = new PriorityQueue<State>((a, b) => a.sec - b.sec);

    minSec[0][0] = 0;
    minHeap.enqueue({ x: 0, y: 0, sec: 0 })

    while (!minHeap.isEmpty()) {
        // get minumum cell State
        const C = minHeap.dequeue(); 

        if (visited[C.x][C.y]) continue;

        // mark as visited
        visited[C.x][C.y] = true;

        for (const [dx, dy] of directions) {
            const nx: number = C.x + dx;
            const ny: number = C.y + dy;

            // skip non-existed cells
            if ((nx < 0) || (nx >= n) || (ny < 0) || (ny >= m)) continue;

            const currSec = Math.max(C.sec, moveTime[nx][ny]) + 1;

            // check if a less sec is found
            if (minSec[nx][ny] > currSec) {
                minSec[nx][ny] = currSec;
                minHeap.enqueue({ x: nx, y: ny, sec: currSec });
            }
        }
    }


    return minSec[n - 1][m - 1];
};