select assignments.id, assignments.day, assignments.chapter, assignments.name, count(*) as total_assistances
from assistance_requests
  join assignments on assignments.id = assistance_requests.assignment_id
group by assignments.id
order by total_assistances DESC