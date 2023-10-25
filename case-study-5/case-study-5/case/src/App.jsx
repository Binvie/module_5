import React, {useState} from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import {Carousel, NavLink} from "react-bootstrap";
import Customer from "./components/customer/Customer.jsx";
import Facility from "./facilities/Facility.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/customer" element={<Customer/>}></Route>
                    {/*<Route path={"/contract"} element={<Contract/>}></Route>*/}
                    <Route path="/facility" element={<Facility/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
