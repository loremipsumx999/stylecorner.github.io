const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password:'',  
    database: 'stylecorner' 
    });

db.connect((err) =>{
    if (err) throw err;
    console.log('MySQL connected...');
});

  app.post('/add-users',(req,res)=>{
    const {username, password} = req.body;
    const sql ='INSERT INTO users (username, password) VALUES (?,?)';

    db.query(sql, [username, password], (err,result)=> {
        if (err) throw err;
        res.send('Sikeresen regisztráltál!');
    });
  });
    
  app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
    db.query(query, [username, password], (err, results) => {
      if (err) {
        console.error('Error:', err);
        res.status(500).send('Error');
      } else if (results.length > 0) {
        res.send('success');
      } else {
        res.send('error');
      }
    });
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});