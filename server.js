const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Connection to database
require("./Database/Connection");

//Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/todos", require("./routes/apiRoutes"));

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT);
});
