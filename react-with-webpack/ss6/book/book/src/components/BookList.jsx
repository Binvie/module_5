import {useNavigate, NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getAll} from "../service/BookService.jsx";

export function ShowList() {
    const navigate = useNavigate();
    const [book, setBook] = useState([])

    useEffect(() => {
        display()
    }, []);
    const display = async () => {
        const list = await getAll();
        setBook(list);
    }
    return (
        <>
            <div className="ok">
                <h3 className="text text-center text-primary">Book Management</h3>
                <NavLink to="/books/create">
                    <button className="btn btn-primary">Create new book</button>
                </NavLink>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {book.map((list, index) => (
                    <tr key={list.id}>
                        <td>{index + 1}</td>
                        <td>{list.title}</td>
                        <td>{list.quantity}</td>
                        <td>
                        <span>
                            <NavLink to="/books/edit"><button className="btn btn-primary">Edit</button></NavLink>
                            <NavLink to="/books/delete"><button className="btn btn-warning">Delete</button></NavLink>
                        </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}