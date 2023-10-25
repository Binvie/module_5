import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import {createBook} from "../service/BookService.jsx";

export function CreateBook() {
    const navigate = useNavigate();

    const addBook = async (value) => {
        await createBook(value);
        navigate("/books")
        toast("Thành Công")
    }
    return (
        <>
            <h1 className="text text-center text-primary">Create New Book</h1>
            <Formik initialValues={{
                title: "",
                quantity: 0
            }} onSubmit={async (values) => {
                await addBook(values)
            }}>
                <div className='container'>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='title' className='form-label'>Title</label>
                            <Field type='text' name="title" className='form-control' id='title'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='quantity' className='form-label'>Quantity</label>
                            <Field type='text' name="quantity" className='form-control' id='quantity'/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>

                    </Form>
                    <NavLink to="/books">
                        <button className="btn btn-primary">Back to List</button>
                    </NavLink>
                </div>
            </Formik>
        </>
    )
}