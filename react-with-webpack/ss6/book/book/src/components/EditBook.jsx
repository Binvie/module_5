import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {editBookService, getBookById} from "../service/BookService.jsx";
import {toast} from "react-toastify";

function EditBook() {
    const navigate = useNavigate();
    const [book, setBook] = useState()
    const {id} = useParams();

    useEffect(() => {
        bookValue();
    }, []);
    const bookValue = async () => {
        const res = await getBookById(id)
        console.log(res.data)
        setBook(res)
    }
    const editBooks = async (book) => {
        const res = await editBookService(book);
        console.log(res)
        if (res.status === 200) {
            console.log(book);
            navigate("/books")
            toast("Edit Successfully!")
        } else toast("Edit fail!")
    }
    if (!book) {
        return null;
    }
    return (
        <div>
            <h1 className="text text-center text-primary">Edit Book</h1>
            <Formik initialValues={book} onSubmit={(book) => {
                editBooks(book)
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
        </div>
    );
}

export default EditBook;