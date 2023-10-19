import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import App1 from "./components/App1";
import Background from "./changeBackgound/Background";

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Background/>
    </div>
  )
}

export default App
