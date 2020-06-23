select DISTINCT teachers.name as teacher_name, cohorts.name
from assistance_requests
  join students
  on students.id = assistance_requests.student_id
  join cohorts on students.cohort_id = cohorts.id
  join teachers on teachers.id = assistance_requests.teacher_id
where cohorts.name = 'JUL02'
order by teacher_name;

