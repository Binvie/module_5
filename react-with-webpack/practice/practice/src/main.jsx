import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const  name = "Hoan Thien";
// const root = ReactDOM.createRoot(document.getElementById("root"))
//
// root.render(
//     React.createElement("h1",{style: {textAlign : "center"}},name)
// );
const root1 = ReactDOM.createRoot(document.getElementById("root"));

const tick = () => {
    root1.render(
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
};

setInterval(tick, 1000);