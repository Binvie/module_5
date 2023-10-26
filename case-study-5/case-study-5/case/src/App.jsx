import React, {useState} from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Customer from "./components/customer/Customer.jsx";
import Facility from "./facilities/Facility.jsx";
import CreateCustomer from "./components/customer/CreateCustomer.jsx";
import EditCustomer from "./components/customer/EditCustomer.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContractList from "./components/contract/ContractList.jsx";
import CreateContract from "./components/contract/CreateContract.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/*home*/}
                    <Route path="/" element={<Home/>}></Route>
                    {/*customer*/}
                    <Route path="/customers" element={<Customer/>}></Route>
                    <Route path="/customers/create" element={<CreateCustomer/>}></Route>
                    <Route path="/customers/edit/:id" element={<EditCustomer/>}></Route>
                    {/*contract*/}
                    <Route path="/contracts" element={<ContractList/>}></Route>
                    <Route path="/contracts/create" element={<CreateContract/>}></Route>
                    {/*<Route path="/contracts/edit/:id" element={<ContractList/>}></Route>*/}

                    <Route path="/" element={<Facility/>}></Route>
                </Routes>
                <ToastContainer></ToastContainer>
            </BrowserRouter>
        </>
    )
}

export default App
