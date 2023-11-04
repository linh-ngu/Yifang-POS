const Pool = require("pg").Pool;

const pool = new Pool({
    user: "csce315_971_kimcchen",
    password: "password",
    host: "csce-315-db.engr.tamu.edu",
    port: 5432,
    database: "csce315331_08g_db"
});

module.exports = pool;