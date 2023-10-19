import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from "./student/StudentInfoComponent";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <table>
                    <tr>
                        <td>id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Address</td>
                    </tr>
                    {Student.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}

export default App
