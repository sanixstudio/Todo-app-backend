const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Connection to database
const mongoose = require("mongoose");
mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database connection successful"))
    .catch((err) => console.log(err));

//Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/todos", require("./routes/apiRoutes"));

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT);
});
