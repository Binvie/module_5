import React, {useEffect, useState} from 'react';
import {deleteContractService, getAllContractService} from "../../service/ContractService.jsx";
import {Button, Modal} from "react-bootstrap";
import Header from "../Header.jsx";
import {NavLink, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function ContractList() {
    const [contract, setContract] = useState([])
    const [show, setShow] = useState(false)
    const [myModal, setMyModal] = useState({})
    useEffect(() => {
        getAllContract();
    }, []);
    const handleShow = (data) => {
        setMyModal(data)
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
        setMyModal({})
    }
    const getAllContract = async () => {
        const res = await getAllContractService();
        setContract(res)
    }
    const deleteContract = async (data) => {
        const res = await deleteContractService(data.id);
        if (res.status === 200) {
            await getAllContract();
            toast("Delete Successfully!")
            handleClose();
        } else toast.error("Action Fail!!")
    }
    return (
        <div>
            <Header/>
            <h1 className="text text-center text-dark">Contract List</h1>
            <NavLink to="/contracts/create">
                <button className="btn btn-primary">Create new Contract</button>
            </NavLink>
            <hr/>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Search</span>
                <input type="text" className="form-control" onChange={evt => evt.target.value}/>
            </div>
            <table className="table table=hover">
                <thead>
                <tr>
                    <th>Stt</th>
                    <th>Contract Number</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Deposit</th>
                    <th>Total Payment</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    contract.map((res, index) => (
                        <tr key={res.id}>
                            <td>{index + 1}</td>
                            <td>{res.contractNumber}</td>
                            <td>{res.startDate}</td>
                            <td>{res.endDate}</td>
                            <td>{res.depositAmount}</td>
                            <td>{res.totalPaymentAmount}</td>
                            <td>
                                <div className="d-flex">
                                    <NavLink to={`/contracts/edit/${res.id}`}
                                             className="btn btn-primary btn-sm me-3"
                                    >
                                        <i className="fa-solid fa-user-pen"></i>
                                    </NavLink>
                                    <a className="btn btn-danger btn-sm" role="button"
                                            onClick={() => handleShow(res)}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </a>
                                    <Modal show={show} onHide={handleClose}>
                                        <MyModal action={handleClose} data={myModal}></MyModal>
                                    </Modal>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    function MyModal({data, action}) {
        return (
            <>
                <Modal.Header closeButton>
                    <Modal.Title>{data.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete {data.contractNumber}!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={action}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => deleteContract(data)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </>
        )
    }
}

export default ContractList;