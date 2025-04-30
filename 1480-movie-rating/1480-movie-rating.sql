# Write your MySQL query statement below
(
    SELECT U.name AS results
    FROM MovieRating MR
    JOIN Users U 
    ON MR.user_id = U.user_id
    GROUP BY MR.user_id
    ORDER BY COUNT(MR.movie_id) DESC, U.name ASC
    LIMIT 1
)

UNION ALL

(
    SELECT M.title AS results
    FROM MovieRating MR
    JOIN Movies M 
    ON MR.movie_id = M.movie_id
    WHERE MR.created_at LIKE '2020-02%'
    GROUP BY MR.movie_id
    ORDER BY AVG(MR.rating) DESC, M.title ASC
    LIMIT 1
)