/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
const survivedRobotsHealths = function(positions, healths, directions) {
    const map = {};
    for (const [i, position] of positions.entries()) {
        map[position] = {
            index: i,
            dir: directions[i],
            health: healths[i],
        };
    }

    // free data when lifeCycle is finish
    healths = directions = null;

    // Sort positions in ascending order
    positions.sort((a, b) => a - b);

    // Use stack to determine which robots survive collisions
    const stack = [];

    for (const currRobotPosition of positions) {
        const currRobot = map[currRobotPosition];

        while (map[stack.at(-1)]?.dir === 'R' && currRobot.dir === 'L' && currRobot.health) {
            const topRobotPosition = stack.at(-1);
            const topRobot = map[topRobotPosition];

            if (topRobot.health === currRobot.health) {
                delete map[stack.pop()];
                delete map[currRobotPosition];
                break;  // Both robots destroy each other
            } else if (currRobot.health > topRobot.health) {
                currRobot.health -= 1;
                delete map[stack.pop()];
            } else {
                topRobot.health -= 1;
                delete map[currRobotPosition];
                break;  // Current robot is destroyed
            }
        }

        // Push current robot position to the stack if it survives
        if (map[currRobotPosition]) {
            stack.push(currRobotPosition);
        }
    }

    // free data when lifeCycle is finish
    positions = null;

    // Sort surviving robots by their original positions' indices
    stack.sort((a, b) => map[a]?.index - map[b]?.index);

    // Return the healths of the surviving robots
    return stack.map((currRobotPosition) => map[currRobotPosition]?.health);
};