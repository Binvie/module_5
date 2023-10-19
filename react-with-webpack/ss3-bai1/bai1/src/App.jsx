import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Alert} from "./exercise1/Alert";

function App() {
  return (
    <>
        <div className="alert alert-warning" role="alert">
            <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại."/>
        </div>
    </>
  )
}

export default App
