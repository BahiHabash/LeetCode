-- # Write your MySQL query statement below
SELECT person_name
FROM (
        SELECT 
            *, 
            SUM(weight) OVER (ORDER BY turn) AS cumulative_sum
        FROM Queue
    ) cumulative_sum_table
WHERE 
    cumulative_sum <= 1000
ORDER BY 
    cumulative_sum DESC
LIMIT 1;