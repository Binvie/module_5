import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToDoList} from "./components/List.jsx";
import {AddWork} from "./components/AddWork.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/list" element={<ToDoList/>}/>
                    <Route path="/list/create" element={<AddWork/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
