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
export const postBooks = async (req, res) => {
  console.log("inside getBooks post ");
  try {
    const b1 = new books({
      bname: "new book 2",
      author: "Never dies",
      cost: 40000,
    });
    const myBooks = await b1.save();
    res.status(200).json(myBooks);
  } catch (error) {
    console.log("error", error);
  }
};
