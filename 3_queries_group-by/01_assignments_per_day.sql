SELECT day, count(assignments.*) AS total_submissions
FROM assignments
GROUP BY day
ORDER BY day;
