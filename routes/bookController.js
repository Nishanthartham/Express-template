import express from "express";
import { books } from "../models/booksModel.js";
const app = express();

export const getBooks = async (req, res) => {
  console.log("raised get request");
  try {
    const myBooks = await books.find();
    res.json(myBooks);
  } catch (error) {
    console.log("error", error);
  }
};

export const postBooks = async (req, res) => {
  console.log("inside post method ");
  try {
    const bname = await req.body.bname;
    const author = await req.body.author;
    const cost = await req.body.cost;
    const b1 = new books({
      bname: bname,
      author: author,
      cost: cost,
    });
    const myBooks = await b1.save();
    res.status(200).json(myBooks);
  } catch (error) {
    console.log("error", error);
  }
};
