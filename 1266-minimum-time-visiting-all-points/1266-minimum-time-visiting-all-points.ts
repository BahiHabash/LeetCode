function minTimeToVisitAllPoints(points: number[][]): number {
    let minTime: number = 0;
    let curr: number[] = points[0];

    for (let i = 1; i < points.length; i++) {
        const curr: number[] = points[i - 1];
        const target: number[] = points[i];

        const dX: number = Math.abs(target[0] - curr[0]);  // delta x diagonal
        const dY: number = Math.abs(target[1] - curr[1]);  // delta y diagonal

        if (dX < dY) {
            const extraYMoves: number = Math.abs(target[1] - curr[1]) - dX;
            minTime += dX + extraYMoves;
        } else {
            const extraYMoves: number = Math.abs(target[0] - curr[0]) - dY;
            minTime += dY + extraYMoves;
        }
    }

    return minTime;
};