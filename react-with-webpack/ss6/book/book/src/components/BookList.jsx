import {useNavigate, NavLink, Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {deleteBook, getAll} from "../service/BookService.jsx";
import {Button, Modal} from "react-bootstrap";
import {toast} from "react-toastify";

export function ShowList() {
    const navigate = useNavigate();
    const [book, setBook] = useState([])
    const [selectBook, setSelectBook] = useState([])
    const [show, setShow] = useState(false);
    const [myModal, setMyModal] = useState({});
    const [name, setName] = useState("")

    const handleClose = () => {
        setShow(false);
        setMyModal({});
    }
    const handleShow = (object) => {
        setShow(true);
        setMyModal(object);
    }

    useEffect(() => {
        display()
    }, [name]);

    const display = async () => {
        const list = await getAll(name);
        setBook(list);
    }
    const deleteBooks = async (data) => {
        console.log(data.id)
        const res = await deleteBook(data.id);
        if (res.status === 200) {
            await display();
            toast("Delete Successfully");
            handleClose();
        } else {
            toast.error("Delete fail");
        }
    }

    return (
        <>
            <div className="ok">
                <h3 className="text text-center text-primary">Book Management</h3>
                <NavLink to="/books/create">
                    <button className="btn btn-primary">Create new book</button>
                </NavLink>
                <div>
                    Search:
                    <input type="text" onChange={(evt => {setName(evt.target.value)})}/>
                </div>
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
                            <NavLink to={`/books/edit/${list.id}`}><button
                                className="btn btn-primary">Edit</button></NavLink>
                            <Button variant="danger" onClick={() => handleShow(list)}>
                                    Delete
                            </Button>
                                <Modal show={show} onHide={handleClose}>
                                    <MyModal action={handleClose} data={myModal}/>
                                </Modal>
                        </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );

    function MyModal({data, action}) {
        return (
            <>
                <Modal.Header closeButton>
                    <Modal.Title>{data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete {data.title}!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={action}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => deleteBooks(data)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </>
        )
    }
}