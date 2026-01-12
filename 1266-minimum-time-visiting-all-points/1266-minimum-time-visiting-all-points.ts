function minTimeToVisitAllPoints(points: number[][]): number {
    let minTime: number = 0;
    const curr: [number, number] = [points[0][0], points[0][1]];

    for (let i = 1; i < points.length; i++) {
        console.log(`minTime: `, minTime);
        console.log(`curr: `, curr);
        console.log(`Points: `, points[i]);
        console.log('==========================');



        const minX: number = Math.abs(points[i][0] - curr[0]);
        const minY: number = Math.abs(points[i][1] - curr[1]);

        const minMoves: number = Math.min(minX, minY);
        minTime += minMoves;

        curr[0] += (curr[0] < points[i][0]) ? minMoves : -minMoves;
        curr[1] += (curr[1] < points[i][1]) ? minMoves : -minMoves;

        if (curr[0] === points[i][0]) {
            const moves: number = Math.abs(points[i][1] - curr[1]);
            minTime += moves;
        } else if (curr[1] === points[i][1]) {
            const moves: number = Math.abs(points[i][0] - curr[0]);
            minTime += moves;
        }

        curr[0] = points[i][0];
        curr[1] = points[i][1];
    }

    return minTime;
};