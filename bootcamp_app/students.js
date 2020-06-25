const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '1234',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`, limit];

pool
  .query(
    `
SELECT students.id, students.name as student_name, cohort_id, cohorts.name as cohort_name
FROM students
JOIN cohorts on cohorts.id = students.cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2
`,
    values
  )
  .then((res) => {
    console.log(res.rows);
  })
  .catch((err) => console.error('query error', err.stack));
