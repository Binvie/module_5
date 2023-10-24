import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function CreateBook() {
    const navigate = useNavigate();

    const addBook = async (value) => {
        const book = {...value};
        await addBook(book);
    }
    return (
        <>
            <h1 className="text text-center text-primary">Create New Book</h1>
            <NavLink to="/books">
                <button>Back to List</button>
            </NavLink>
            <Formik initialValues={{
                title: "",
                quantity: 0
            }} onSubmit={(values) => {
                addBook(values)
                navigate("/list")
            }}>
                <div className='container'>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Title</label>
                            <Field type='text' name="title" className='form-control' id='studentName'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentAge' className='form-label'>Quantity</label>
                            <Field type='text' name="quantity" className='form-control' id='studentAge'/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}