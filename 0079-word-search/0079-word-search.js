/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board, word) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    function DFS(board, i, j, word, index) {
        if (index === word.length) return true;
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] !== word[index]) return false;

        const temp = board[i][j];
        board[i][j] = '#'; // Mark as visited

        for (const [hSteps, vSteps] of directions) {
            const newI = i + vSteps;
            const newJ = j + hSteps;

            if (DFS(board, newI, newJ, word, index + 1)) {
                return true;
            }
        }

        board[i][j] = temp; // Restore the board

        return false;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0] && DFS(board, i, j, word, 0)) {
                return true;
            }
        }
    }

    return false;
};
