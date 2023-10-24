import React, {useEffect, useState} from "react";
import {getList} from "../service/ToDoList.jsx";
import {NavLink} from "react-router-dom";

export function ToDoList() {
    const [state, setState] = useState([]);
    const [appear, setAppear] = useState(false);
    useEffect(() => {
        display();
    }, []);
    const display = async () => {
        const workList = await getList();
        setState(workList);
    }

    return (
        <>
            <h1>ToDo List</h1>
            <NavLink to="/list/create"><button>Create</button></NavLink>
            <table>
                <thead>
                <tr>
                    <th>User Id:</th>
                    <th>Title:</th>
                </tr>
                </thead>
                <tbody>
                {state.map((list) => (
                    <tr key={list.id}>
                        <td>{list.id}</td>
                        <td>{list.title}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}