select avg(assistance_requests.completed_at - assistance_requests.started_at) as average_duration
from assistance_requests