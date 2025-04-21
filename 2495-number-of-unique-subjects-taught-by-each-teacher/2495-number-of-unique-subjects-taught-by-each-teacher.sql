# Write your MySQL query statement below
SELECT T1.teacher_id, COUNT(DISTINCT T1.subject_id) AS cnt
FROM Teacher T1
LEFT JOIN Teacher T2
ON T1.teacher_id = T2.teacher_id
GROUP BY T1.teacher_id;