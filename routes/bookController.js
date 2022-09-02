import express from "express";
import { books } from "../models/booksModel.js";
const app = express();

export const getBooks = async (req, res) => {
  console.log("inside getBooks");
  try {
    const myBooks = await books.find();
    res.status(200).json(myBooks);
  } catch (error) {
    console.log("error", error);
  }
};
