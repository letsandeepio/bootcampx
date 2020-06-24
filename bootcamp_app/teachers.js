const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '1234',
  host: 'localhost',
  database: 'bootcampx'
});

console.log(`Querying database for ${process.argv[2]}`);
pool
  .query(
    `
select DISTINCT teachers.name as teacher_name, cohorts.name
from assistance_requests
  join students
  on students.id = assistance_requests.student_id
  join cohorts on students.cohort_id = cohorts.id
  join teachers on teachers.id = assistance_requests.teacher_id
where cohorts.name like '${process.argv[2]}'
order by teacher_name;


`
  )
  .then((res) => {
    res.rows.forEach((row) => console.log(`${row.name}: ${row.teacher_name}`));
  })
  .catch((err) => console.error('query error', err.stack));