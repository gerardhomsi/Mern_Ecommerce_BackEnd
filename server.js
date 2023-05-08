const express = require("express");
const app = express();
const connectDB = require("./database/db");

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
