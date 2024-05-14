import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from "./routes/books.js";

const app = express();
app.use(express.json());

const port = process.env.PORT || PORT;

app.use("/books", booksRoute);

try {
  await mongoose.connect(mongoDBURL);
  app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
  });
} catch (error) {
  console.log(error);
}

