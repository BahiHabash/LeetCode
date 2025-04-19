# Write your MySQL query statement below
SELECT 
    date_format(trans_date,'%Y-%m') as month, 
    country, 
    COUNT(*) AS trans_count,
    SUM(state = "approved") AS approved_count,
    SUM(amount) AS trans_total_amount,
    SUM(if(state = 'approved', amount, 0)) AS approved_total_amount
FROM
    Transactions
GROUP BY
    country, month;