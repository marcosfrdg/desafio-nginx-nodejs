const express = require("express");
const mysql = require("mysql");
const util = require('util');
const app = express();
const port = 3000;
const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb"
};

const connection = mysql.createConnection(config);
const query = util.promisify(connection.query).bind(connection);
const sqlInsert = `INSERT INTO people(name) values('Marcos Rodrigues')`;
connection.query(sqlInsert);

app.get("/", (req, res) => {
    (async () => {
        try {
          const rows = await query(`SELECT * FROM people WHERE id = 1`);
          res.send(`<h1>Full Cycle Rocks!</h1> ${rows[0].name}`);
        } finally {
          console.log("finally")
        }
    })()
})

app.listen(port, () => {
    console.log("Rodando na porta: ", port);
});

