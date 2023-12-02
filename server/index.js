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
    const result = await pool.query('SELECT * FROM orders ORDER BY order_id DESC');
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

// report -> popularity analysis
app.get('/manager/popularityanalysis', async (req, res) => {
  try {
    const result = await pool.query(`
  SELECT
    d.name AS drink_name,
    SUM(d.price) AS total_sales
  FROM
    drinks d
    JOIN orders o ON d.order_id = o.order_id
  WHERE
    TO_DATE(o.transaction_date, 'YYYY-MM-DD') BETWEEN 'start-date' AND 'end-date'
  GROUP BY
    d.name
  ORDER BY
    total_sales DESC
  LIMIT 10
`);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// report -> sales report
app.get('/manager/salesreport', async (req, res) => {
  try {
    const result = await pool.query(`
  SELECT
    d.name AS drink_name,
    SUM(d.price) AS total_sales
  FROM
    drinks d
    JOIN orders o ON d.order_id = o.order_id
  WHERE
    TO_DATE(o.transaction_date, 'YYYY-MM-DD') BETWEEN 'start-date' AND 'end-date'
    AND LOWER(TRIM(d.name)) ILIKE LOWER(TRIM('drink-anme'))
  GROUP BY
    d.name
`);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// report -> restock report
app.get('/manager/restockreport', async (req, res) => {
  try {
    //console.log("Endpoint hit: /manager/restockreport");
    const result = await pool.query('SELECT name FROM ingredients WHERE stock_level <= 100');
    console.log(result.rows); // Log the result
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// report -> excess report
app.get('/manager/excessreport', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM base_drinks');
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

// add ingredient to ingredients table
app.post('/inventory/addIngredient', async (req, res) => {
  try {
    const { ingredient_id, name, stock_level, restock_date, supplier } = req.body;
    const newIngredient = await pool.query("INSERT INTO ingredients VALUES($1, $2, $3, $4, $5) RETURNING *",
    [ingredient_id, name, stock_level, restock_date, supplier]
    );
    res.json(newIngredient.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// get last ingredient_id
app.get('/inventory/getIngredientId', async (req, res) => {
  try {
    const result = await pool.query('SELECT ingredient_id FROM ingredients ORDER BY ingredient_id DESC LIMIT 1');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// remove ingredient from inventory
app.delete('/inventory/deleteIngredient', async (req, res) => {
  try {
    const { name } = req.body;
    const deleteIngredient = await pool.query("DELETE FROM ingredients WHERE name = $1",
    [name]
    );
    res.json("Ingredient was deleted.");
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// change ingredient restock date
app.put('/inventory/changeRestockDate', async (req, res) => {
  try {
    const { restock_date, name } = req.body;
    const updateRestockDate = await pool.query("UPDATE ingredients SET restock_date = $1 where name = $2",
    [restock_date, name]
    );
    res.json("Restock Date was updated");
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// change ingredient supplier
app.put('/inventory/changeSupplier', async (req, res) => {
  try {
    const { supplier, name } = req.body;
    const updateSupplier = await pool.query("UPDATE ingredients SET supplier = $1 where name = $2",
    [supplier, name]
    );
    res.json("Supplier was updated");
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