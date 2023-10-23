import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";


function ContactForm() {
    // const navigate = useNavigate();
    // const [form, setForm] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     message: ""
    // });
    const initialValue = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }

    const handleChange = event => {

    }
    const handleValidate = {
        name: Yup.string()
            .required()
            .matches(/^[A-Za-z ]{3,100}$/, "invalid name: first letter should be uppercase!"),
        email: Yup.string()
            .required()
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "invalid Email"),
        phone: Yup.string()
            .required()
    }
    return (
        <>
            <div>
                <h1>Contact Form</h1>
                <Formik initialValues={initialValue} onSubmit={(event) => {
                    console.log(event)
                    alert("ok")
                }} validationSchema={Yup.object(handleValidate)}
                >
                    <div className="container px-5 my-5">
                        <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="name">Name</label>
                                <Field className="form-control" name="name" id="name" type="text"
                                       data-sb-validations=""/>
                                <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="email">Email</label>
                                <Field className="form-control" name="email" id="email" type="text"/>
                                <ErrorMessage name="email" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="phone">Phone</label>
                                <Field className="form-control" name="phone" id="phone" type="text"
                                       data-sb-validations=""/>
                                <ErrorMessage name="phone" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="message">Message</label>
                                <Field className="form-control" name="message" id="message" type="text"
                                       data-sb-validations=""/>
                                <ErrorMessage name="message" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary" id="submitButton" type="submit">Submit
                                </button>
                            </div>
                        </Form>
                    </div>
                </Formik>
            </div>
        </>
    );
}

export default ContactForm;