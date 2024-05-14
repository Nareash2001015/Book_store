/* eslint-disable no-unused-vars */
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteBook() {
  const { id } = useParams();
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDeleteBook = () => {
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(true);
        navigate("/");
      })
      .catch((error) => {
        alert("An error happened. Please check console.");
        console.log(error);
      });
  };

  return (
    <div className="m-8">
      <BackButton />
      <h1 className="text-3xl my-4">Delete book</h1>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">
            Do you want to delete the record?
          </label>
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleDeleteBook}>
          Yes
        </button>
      </div>
    </div>
  );
}

export default DeleteBook;
