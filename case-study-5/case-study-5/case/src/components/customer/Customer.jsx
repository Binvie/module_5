import React, {useEffect, useState} from 'react';
import {useNavigate, NavLink, useParams} from "react-router-dom";
import {deleteCustomerService, getAllCustomer} from "../../service/CustomerService.jsx";
import {toast} from "react-toastify";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import {Button, Modal} from "react-bootstrap";

function Customer() {
    const [show, setShow] = useState(false);
    const [myModal, setMyModal] = useState({});
    const [list, setList] = useState([])

    const handleClose = () => {
        setShow(false)
        setMyModal({})
    }

    const handleShow = (object) => {
        setShow(true)
        setMyModal(object)
    }

    useEffect(() => {
        showList()
    }, []);

    const showList = async () => {
        const res = await getAllCustomer()
        setList(res)
    }
    const deleteCustomer = async (data) => {
        const res = await deleteCustomerService(data.id);
        if (res.status === 200) {
            await showList()
            toast("Delete Successfully!!")
            handleClose()
        } else toast.error("Action Fail!!")
    }
    return (
        <div>
            <Header/>
            <h1 className="text text-center text-dark">Customer List</h1>
            <NavLink to="/customers/create">
                <button className="btn btn-primary btn-sm">Create new Customer</button>
            </NavLink>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Stt</th>
                    <th>Name</th>
                    <th>Day of birth</th>
                    <th>Gender</th>
                    <th>Identity Card</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Type</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {list.map((customer, index) => (
                    <tr key={customer.id}>
                        <td>{index + 1}</td>
                        <td>{customer.name}</td>
                        <td>{customer.birthday}</td>
                        <td>{customer.gender === 1 ? "Male" : "Female"}</td>
                        <td>{customer.idCard}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.email}</td>
                        <td>{customer.typeCustomer.name}</td>
                        <td>{customer.address}</td>
                        <td>
                            <div className="d-flex">
                                <NavLink to={`/customers/edit/${customer.id}`}
                                         className="text-dark me-3">
                                    <i className="fa-solid fa-user-pen"></i>
                                </NavLink>
                                <a role="button" className="text-danger btn-sm" onClick={() => handleShow(customer)}>
                                    <i className="fa-solid fa-trash"></i>
                                </a>
                                <Modal show={show} onHide={handleClose}>
                                    <MyModal action={handleClose} data={myModal}/>
                                </Modal>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Footer/>
        </div>
    );

    function MyModal({data, action}) {
        return (
            <>
                <Modal.Header closeButton>
                    <Modal.Title>{data.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete {data.name}!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={action}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => deleteCustomer(data)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </>
        )
    }
}

export default Customer;