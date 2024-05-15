/* eslint-disable no-unused-vars */
import * as React from "react";
import { Route, Routes } from 'react-router-dom';
import CreateBooks from "./pages/CreateBooks";
import GetBook from "./pages/GetBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books/create" element={<CreateBooks/>}/>
      <Route path="/books/details/:id" element={<GetBook />}/>
      <Route path="/books/edit/:id" element={<EditBook />}/>
    </Routes>
  );
};

export default App;
