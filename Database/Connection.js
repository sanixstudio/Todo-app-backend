const mongoose = require("mongoose");
mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log("Database connection successful"))
    .catch((err) => console.log(err));
