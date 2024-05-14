import express from "express";
import { Book } from "../models/bookModel";

const router = express.Router();

router.post("/books", async (req, res) => {
  try {
    if (!req.body.title | !req.body.author | !req.body.publishYear) {
      return res.status(404).send({
        message: "Some required fields are missing.",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).send(books);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: error.message,
    });
  }
});

router.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findById(id);
    return res.status(200).send(books);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title | !req.body.author | !req.body.publishYear) {
      return res.status(404).send({
        message: "Some required fields are missing.",
      });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(400).send({
        message: "Book not found",
      });
    }
    return res.status(200).send({
      message: "The book updated",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(400).send({
        message: "Book not found",
      });
    }
    return res.status(200).send({
      message: "Book deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: error.message,
    });
  }
});

export default router;