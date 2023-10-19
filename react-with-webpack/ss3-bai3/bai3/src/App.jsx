import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ViewMore from "./component/ViewMore";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ViewMore/>
    </>
  )
}

export default App
