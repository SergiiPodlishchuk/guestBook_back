const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const messageRouters = require("./messages/message.routers");

const PORT = 5555;

const MONGODB =
  "mongodb+srv://podluy23:magazin12@cluster0.mkt5h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

(async function () {
  try {
    const connectDB = mongoose.connect(MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });

    if (connectDB) {
      console.log("\x1b[33m%s\x1b[0m", "Database connection successful");
    }
  } catch (error) {
    const err = new Error("Not connect db");
    return err;
  }
})();

app.use(cors());
app.use(express.json());
app.use("/api/messages", messageRouters);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
