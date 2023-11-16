const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a todo

// get staff
// app.get('/manager', async (req, res) => {
//     try {
//       const result = await pool.query('SELECT * FROM staff');
//       res.json(result.rows);
//       // res.send("hello");
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//     }
//   });

// cashier -> get base drinks
app.get('/cashier', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM base_drinks');
    res.json(result.rows);
    // console.log(req.params);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// manager -> get ingredients
app.get('/manager', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM ingredients');
    res.json(result.rows);
    // res.send("hello");
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// manager -> get menu (base_drinks)
app.get('/manager/menu', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM base_drinks');
    res.json(result.rows);
    // console.log(req.params);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

//manager -> get orderhistory
app.get('/manager/orderhistory', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders');
    res.json(result.rows);
    // console.log(req.params);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// order -> get ingredients
app.get('/order/getIngredients', async (req, res) => {
  try {
    const { name } = req.query;
    const result = await pool.query(`SELECT list_ingredients FROM base_drinks WHERE name = $1`, [name]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// order -> get drink names
app.get('/order/getDrinks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM base_drinks');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// get last order_id
app.get('/order/getId', async (req, res) => {
  try {
    const result = await pool.query('SELECT order_id FROM orders ORDER BY order_id DESC LIMIT 1');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// get a todo

app.post('/checkout', async (req, res) => {
  try {
    const { order_id, staff_id, transaction_date, payment_method, payment_amount, timestamp } = req.body;
    const newOrder = await pool.query("INSERT INTO orders VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
    [order_id, staff_id, transaction_date, payment_method, payment_amount, timestamp]
    );
    res.json(newOrder.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


// update a todo

//delete a todo


app.listen(5000, () => {
    console.log("server has started on port 5000");
});