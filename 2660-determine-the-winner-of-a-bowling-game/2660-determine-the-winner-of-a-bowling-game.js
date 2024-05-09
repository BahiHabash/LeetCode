/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
const isWinner = function(player1, player2) { // Time : O(n) | Space : O(1)
    let sum1 = 0;
    let sum2 = 0;
    
    for (let i = 0; i < player1.length; i++) {
        const n1 = player1[i];
        sum1 += n1;
        sum1 += n1 * ((player1[i - 1] === 10) || (player1[i - 2] === 10));

        const n2 = player2[i];
        sum2 += n2;
        sum2 += n2 * ((player2[i - 1] === 10) || (player2[i - 2] === 10));
    }

    if (sum1 > sum2)
        return 1;
    if (sum1 < sum2)
        return 2;
    return 0;
};