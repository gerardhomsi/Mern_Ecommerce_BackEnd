const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gerardhomsi:Gerar70100616@cluster0.crlp5pj.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Database Connection Successful");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
