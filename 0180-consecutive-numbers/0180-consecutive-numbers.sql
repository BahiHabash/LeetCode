# Write your MySQL query statement below
SELECT DISTINCT num AS ConsecutiveNums
FROM Logs L1
WHERE 
    num IN (SELECT L2.num FROM Logs L2 WHERE L2.id = L1.id - 1)
    AND
    num IN (SELECT L3.num FROM Logs L3 WHERE L3.id = L1.id - 2)
;