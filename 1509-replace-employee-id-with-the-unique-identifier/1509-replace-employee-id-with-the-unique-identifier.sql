# Write your MySQL query statement below
SELECT a.name, b.unique_id
FROM Employees a
LEFT JOIN EmployeeUNI b on a.id = b.id