SELECT cohorts.name, count(*) as student_count
FROM cohorts
  JOIN students on students.cohort_id = cohorts.id
GROUP BY cohorts.name
HAVING count (*) >= 18
ORDER BY count(*)