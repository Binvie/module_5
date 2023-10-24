import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {ShowList} from "./components/BookList.jsx";
import {CreateBook} from "./components/CreateBook.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/books" element={<ShowList/>}></Route>
              <Route path="/books/create" element={<CreateBook/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
