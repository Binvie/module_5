import {createCustomerService, getAllCustomer} from "../../service/CustomerService";
import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {getAllTypeCustomer} from "../customerType/CustomerType.jsx";

function CreateCustomer() {
    const navigate = useNavigate();
    const [types, setTypes] = useState([])

    useEffect(() => {
        displayType();
    }, []);

    const createCustomer = async (data) => {
        const res = {...data, typeCustomer: JSON.parse(data.typeCustomer)}
        await createCustomerService(res)
        navigate("/customers")
        toast("Create Successfully")
    }
    const displayType = async () => {
        const res = await getAllTypeCustomer()  ;
        setTypes(res)
    }
    const initialValue = {
        "name": "",
        "birthday": "",
        "gender": 0,
        "idCard": "",
        "phone": "",
        "email": "",
        "typeCustomer": JSON.stringify({
            "id": 1,
            "name": "Diamond"
        })
    }

    const today = new Date();
    const years18 = new Date(today);
    years18.setFullYear(today.getFullYear()-18);

    const handleValidate = {
        name: Yup.string()
            .required()
            .matches(/^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/, "invalid name: first letter should be uppercase!"),
        email: Yup.string()
            .required()
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "invalid Email"),
        phone: Yup.string()
            .required()
            .matches(/^[0-9]{10}$/,"invalid phone number, 10 numbers"),
        idCard: Yup.string()
            .required()
            .matches(/^[0-9]{10}$/,"invalid ID card,include 10 numbers"),
        birthday: Yup.date()
            .required()
            .max(years18,"Should be greater than 18 years-old")

    }
    return (
        <>
            <Formik initialValues={initialValue} onSubmit={async (data) => {
                await createCustomer(data)
            }}
            validationSchema={Yup.object(handleValidate)}
            >
                <div className="container px-5 my-5">
                    <h1 className="text text-center text-warning">Create Customer</h1>
                    <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="fullName"><b>Name</b><span
                                style={{color: "red"}}>*</span></label>
                            <Field className="form-control" id="fullName" type="text" placeholder="Full name"
                                   name="name"/>
                            <ErrorMessage className="text text-danger" name="name" component="div"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="birthday"><b>Birthday</b><span
                                style={{color: "red"}}>*</span></label>
                            <Field className="form-control" id="birthday" type="date" name="birthday"
                                   placeholder="Birthday"
                                   data-sb-validations=""/>
                            <ErrorMessage className="text text-danger" name="birthday" component="div"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label d-block"><b>Gender</b><span
                                style={{color: "red"}}>*</span></label>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" value="1" id="men" type="radio" name="gender"
                                       data-sb-validations=""/>
                                <label className="form-check-label" htmlFor="men">Men</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" value="0" id="female" type="radio" name="gender"
                                       data-sb-validations=""/>
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="idCard"><b>ID Card</b><span
                                style={{color: "red"}}>*</span></label>
                            <Field className="form-control" name="idCard" id="idCard" type="text" placeholder="idCard"
                                   data-sb-validations=""/>
                            <ErrorMessage className="text text-danger" name="idCard" component="div"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="phoneNumber"><b>Phone number</b><span
                                style={{color: "red"}}>*</span></label>
                            <Field className="form-control" name="phone" id="phoneNumber" type="text"
                                   placeholder="Phone number"
                                   data-sb-validations=""/>
                            <ErrorMessage className="text text-danger" name="phone" component="div"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email"><b>Email</b><span
                                style={{color: "red"}}>*</span></label>
                            <Field className="form-control" name="email" id="email" type="text" placeholder="Email"
                                   data-sb-validations=""/>
                            <ErrorMessage className="text text-danger" name="email" component="div"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="typeCustomer"><b>Type customer</b><span
                                style={{color: "red"}}>*</span></label>
                            <Field as="select" className="form-select" name="typeCustomer" id="typeCustomer"
                                   aria-label="Type customer">
                                {types.map(type => (
                                    <option key={type.id} value={JSON.stringify(type)}>{type.name}</option>
                                ))}
                            </Field>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="address"><b>Address</b><span
                                style={{color: "red"}}>*</span></label>
                            <Field className="form-control" name="address" id="address" type="text"
                                   placeholder="Address"
                                   data-sb-validations=""/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    );
}

export default CreateCustomer;