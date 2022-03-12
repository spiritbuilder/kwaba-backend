let mongoose = require("mongoose");

let url = process.env.DB_URL || "mongodb://127.0.0.1:27017/kwaba";

class Database {
  _connect() {
    mongoose
      .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((e) => console.log("Database Connection Successful"))
      .catch((e) => console.log(e));
  }
}

module.exports = new Database();
