'use strict'
// environment setup
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL
const NODE_ENV = process.env.NODE_ENV;
// requiering libraries
const express = require('express');
const cors = require('cors');
const pg = require('pg');
// creating the app
const app = express();
// setup app
app.use(cors());
// creating the ejs engine
// creating psql client
const options = NODE_ENV === 'production' ? { connectionString: DATABASE_URL, ssl: { rejectUnauthorized: false } } : { connectionString: DATABASE_URL };
const client = new pg.Client(process.env.DATABASE_URL);
// check client connection
client.on('error', error => { throw error; })
client.connect().then(() => {
    // listen to the port
    app.listen(PORT, () => {
        console.log('we are listening to port 3000')
    })
}).catch(error => {
    console.log("client connction faild");
})
// app middleware
app.get('/data', getData)

function getData(request, response) {
    const getItems = 'SELECT * FROM items';
    client.query(getItems).then(data => {
        response.send(data.rows)
    });
}
