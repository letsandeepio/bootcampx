const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '1234',
  host: 'localhost',
  database: 'bootcampx'
});

console.log(process.argv[2], process.argv[3]);
pool
  .query(
    `
SELECT students.id, students.name as student_name, cohort_id, cohorts.name as cohort_name
FROM students
JOIN cohorts on cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3]}
`
  )
  .then((res) => {
    console.log(res.rows);
  })
  .catch((err) => console.error('query error', err.stack));
