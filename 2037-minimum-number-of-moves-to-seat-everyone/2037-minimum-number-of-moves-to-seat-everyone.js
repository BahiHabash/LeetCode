/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
const minMovesToSeat = function(seats, students) { // Time : O(n*log(n)), Space : O(1)
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    return seats.reduce((acc, n, i) => acc + Math.abs(n - students[i]), 0);
};