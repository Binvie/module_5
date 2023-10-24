import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";

function Customers(props) {
    const [customer, setCustomer] = useState([])

    useEffect(() => {

    },[])

    const handleSubmit = () => {

    }

    return (
        <>
            <Formik initialValues={{

            }} onSubmit={handleSubmit}>
                <Form>
                    <label htmlFor="name">Name: </label>
                    <Field name="name" id="name"/>
                    <ErrorMessage name={name} />
                </Form>
            </Formik>
        </>
    );
}

export default Customers;