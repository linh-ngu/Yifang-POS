const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a todo

//get manager
app.get('/manager', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM staff');
      res.json(result.rows);
      // res.send("hello");
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });

// get a todo

// update a todo

//delete a todo


app.listen(5000, () => {
    console.log("server has started on port 5000");
});