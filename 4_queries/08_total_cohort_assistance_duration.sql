select avg(total_duration) as total_average_duration
from(
select cohorts.name , sum(assistance_requests.completed_at - assistance_requests.started_at) as total_duration
  from assistance_requests
    join students on students.id = assistance_requests.student_id
    join cohorts
    on cohorts.id = students.cohort_id
  group by cohorts.name
  order by total_duration) total_duration_for_all_cohort