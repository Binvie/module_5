import {useState} from 'react'
import './App.css'
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";

function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            <CounterOne/>
            <CounterTwo/>
        </>
    )
}

export default App
