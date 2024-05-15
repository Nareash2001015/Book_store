/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteBook({onClose}) {
  const { id } = useParams();
  const [Loading, setLoading] = useState(false);

  const handleDeleteBook = () => {
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(true);
        onClose;
      })
      .catch((error) => {
        alert("An error happened. Please check console.");
        console.log(error);
      });
  };

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-65 z-50">
      <div className="flex items-center justify-start h-full">
        <div className="flex flex-col h-fit mx-auto my-auto items-center border-2 border-sky-400 bg-white rounded-xl w-fit p-4">
          <div className="fixed">

          </div>
          <div className="my-4 flex justify-center">
            <label className="text-xl mr-4 text-gray-500">
              Do you want to delete the record?
            </label>
          </div>
          <div className="flex justify-around">
            <button
              className="px-10 bg-sky-300 m-8 rounded-md text-white"
              onClick={handleDeleteBook}
            >
              Yes
            </button>
            <button
              className="px-10 bg-red-600 m-8 rounded-md text-white"
              onClick={onClose}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteBook;
