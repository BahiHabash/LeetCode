-- Write your PostgreSQL query statement below
SELECT tweet_id
FROM Tweets T
WHERE LENGTH(T.content) > 15;