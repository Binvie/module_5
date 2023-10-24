import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Customers from "./components/customer/Customers.jsx";
import {Route, Routes} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/customer" element={<Customers/>}/>
      </Routes>
    </>
  )
}

export default App
