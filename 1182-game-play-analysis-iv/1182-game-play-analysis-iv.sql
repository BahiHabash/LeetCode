# Write your MySQL query statement below
SELECT
    ROUND
    (
        COUNT(A.player_id)
        / (SELECT COUNT(DISTINCT C.player_id) FROM Activity C)
        , 2
    )
    AS fraction
FROM
    Activity A
WHERE 
    (
        A.player_id, DATE_SUB(A.event_date, INTERVAL 1 DAY)
    ) 
    IN 
    (
        SELECT B.player_id, MIN(B.event_date)
        FROM Activity B
        GROUP BY B.player_id
    )
