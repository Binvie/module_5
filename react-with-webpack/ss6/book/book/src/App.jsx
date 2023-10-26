import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {ShowList} from "./components/BookList.jsx";
import {CreateBook} from "./components/CreateBook.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditBook from "./components/EditBook.jsx";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
          <Routes>
              <Route path="/books" element={<ShowList/>}></Route>
              <Route path="/books/create" element={<CreateBook/>}></Route>
              <Route path="/books/edit/:id" element={<EditBook/>}></Route>
          </Routes>
          <ToastContainer></ToastContainer>
    </>
  )
}

export default App
