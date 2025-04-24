# Write your MySQL query statement below
SELECT 
    M.employee_id, 
    M.name, 
    COUNT(E.reports_to) AS reports_count, 
    ROUND(AVG(E.age)) AS average_age
FROM Employees E
JOIN Employees M
ON E.reports_to = M.employee_id
GROUP BY E.reports_to
ORDER BY employee_id;