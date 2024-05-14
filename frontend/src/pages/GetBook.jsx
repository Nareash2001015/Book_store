/* eslint-disable no-unused-vars */
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import React, {useEffect, useState} from 'react';

function GetBook() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response) => {
      setBook(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    })
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">
        Get Book
      </h1>
      <BackButton />
      {
        loading ?
        <Spinner /> : (
          <div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500"></span>
              <span>{book._id}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500"></span>
              <span>{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500"></span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500"></span>
              <span>{book.publishYear}</span>
            </div>
          </div>          
        )
      }
    </div>
  )
}

export default GetBook