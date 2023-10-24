import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {getAll} from "../../service/customerService.jsx";

function Customers(props) {
    const [customer, setCustomer] = useState([])

    useEffect(() => {
        display();
    },[])

    const display = async () => {
        const href = await getAll();
        setCustomer(href);
    }

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Stt</th>
                    <th>Name</th>
                    <th>Hobbies</th>
                </tr>
                </thead>
                <tbody>
                {customer.map((customer,index) => (
                    <tr key={customer.id}>
                        <td>{index + 1}</td>
                        <td>{customer.name}</td>
                        <td>{customer.hobbies}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default Customers;