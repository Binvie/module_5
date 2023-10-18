import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

const tick = () => {
    root.render(
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {navigator.userAgent}.</h2>
        </div>
    );
};

setInterval(tick, 1000);


