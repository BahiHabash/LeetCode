# Write your MySQL query statement below
SELECT 
    CASE 
        WHEN id % 2 = 0 THEN id - 1
        ELSE IF(id + 1 IN (SELECT id FROM Seat), id + 1, id)
    END AS id,
    student
FROM Seat
ORDER BY id;