# Write your MySQL query statement below
SELECT C.customer_id
FROM Customer C
GROUP BY C.customer_id
HAVING COUNT(DISTINCT C.product_key) = (SELECT COUNT(*) FROM Product);