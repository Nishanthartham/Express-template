import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { getBooks } from "./routes/bookController.js";

const Router = express.Router();
// import bookData from
const app = express();
const uri = "mongodb://localhost:27017/newdb";
app.use(express.json());
app.listen(8080, () => {
  console.log("working bro");
});
mongoose.connect(uri, () => {
  console.log("connected to db");
});

app.get("/books", getBooks);
