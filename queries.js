const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sampleuser',
  password: 'dhanush@123',
  port: 3000,
});

const getUsers = (request, response) => {
    pool.query('SELECT * FROM record ORDER BY ifsc ASC limit 2',(error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  };

  const getbranch = (request, response) => {
    pool.query('SELECT * FROM record  ORDER BY ifsc DESC limit 1',(error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  };

  const getUser = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query('SELECT * FROM users WHERE id = $1',  [id],(error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  };

  const updateUser = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, email } = request.body;
   
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`User modified with ID: ${id}`);
      }
    );
  };

module.exports = {getUsers,
updateUser,
getUser,
getbranch
}



