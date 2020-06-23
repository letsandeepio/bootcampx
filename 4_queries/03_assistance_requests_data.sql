select teachers.name as teacher, students.name as student, assignments.name  as assignment_name, assistance_requests.completed_at - assistance_requests.started_at as duration
from assistance_requests
  JOIN students
  ON student_id = students.id
  JOIN teachers
  ON teacher_id = teachers.id
  JOIN assignments
  ON assignment_id = assignments.id
ORDER BY duration;