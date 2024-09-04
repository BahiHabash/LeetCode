/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
const robotSim = function(commands, obstacles) {
    const obstaclesSet = new Set(obstacles.map(([x, y]) => `${x},${y}`));
    const DIRECTIONS = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let dirIdx = 0;
    let [x, y] = [0, 0];
    let maxEuclideanDistance = 0;

    for (const command of commands) {
        if (command === -1) {
            dirIdx = (dirIdx + 1) % DIRECTIONS.length;  // Turn right
            continue;
        }

        if (command === -2) {
            dirIdx = (dirIdx + DIRECTIONS.length - 1) % DIRECTIONS.length;  // Turn left
            continue;
        }

        let [dx, dy] = DIRECTIONS[dirIdx];
        for (let i = 1; i <= command; i++) {
            const newX = x + dx;
            const newY = y + dy;

            if (obstaclesSet.has(`${newX},${newY}`)) {
                break;
            }

            x = newX;
            y = newY;
        }        

        maxEuclideanDistance = Math.max(x ** 2 + y ** 2, maxEuclideanDistance);
    }

    return maxEuclideanDistance;
};
