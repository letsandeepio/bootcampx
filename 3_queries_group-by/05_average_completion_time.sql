SELECT students.name, avg(assignment_submissions.duration) as average_time
FROM students
  JOIN assignment_submissions on assignment_submissions.student_id = students.id
WHERE end_date IS NULL
GROUP BY students.name
ORDER BY name;