/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = function(logs) { // Time : O(n), Space : O(1)
    let folderDipth = 0;

    for (const operation of logs) {
        if (operation === '../') {
            folderDipth = Math.max(folderDipth - 1, 0);
        } else if (operation !== './') {
            folderDipth++;
        }
    }

    return folderDipth;
};