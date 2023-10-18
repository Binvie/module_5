
import './App.css'
import React from "react";

const students = [
    {
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },
    {
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },
    {
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy'
    }
]


function App() {
    return (
        <div>
            <h1>Student Management</h1>
            <table>
                <thead>
                <tr>
                    <td>Company</td>
                    <td>Contact</td>
                    <td>Country</td>
                </tr>
                </thead>
                <tbody>
                {students.map(stu =>(
                    <tr>
                        <td>{stu.company}</td>
                        <td>{stu.contact}</td>
                        <td>{stu.country}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
export default App
