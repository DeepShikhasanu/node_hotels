const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//db.js
const db = require("./db");
//.env
require("dotenv").config();

// Use CORS to handle cross-origin requests
const cors = require("cors");
app.use(cors());

app.get('/', function (req, res) {
    res.send('Welcome to our Hotel');
})

// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


const PORT = process.env.PORT || 4003;

app.listen(PORT, () => {
  console.log("listening on port 4003");
});