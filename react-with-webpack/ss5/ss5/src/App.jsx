import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import {About} from "./components/About";
import {Route, Routes} from "react-router";
import {Home} from "./components/RouterTest";


export default function App() {
    return (
        <div className="App">
            <h1>Welcome to React Router!</h1>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}
