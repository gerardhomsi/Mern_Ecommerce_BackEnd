const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./database/db");
const authRoutes = require("./routes/auth");

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/API/auth", authRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send("Inside Server Madafaka");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
