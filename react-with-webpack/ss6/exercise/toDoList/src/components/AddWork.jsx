import {useEffect, useState} from "react";
import {createJob} from "../service/ToDoList.jsx";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";

export function AddWork() {
    const navigate = useNavigate();

    const createWork = async (value) => {
        const work = {...value}
        await createJob(work);
    }
    return (
        <>
            <h1>ToDo List</h1>
            <Formik initialValues={{
                userId: 0,
                title: "",
            }} onSubmit={(values) => {
                createWork(values)
                navigate("/list")
            }}>
                <div className='container'>
                    <h1>Create Student</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>userId</label>
                            <Field type='text' name="userId" className='form-control' id='studentName'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentAge' className='form-label'>title</label>
                            <Field type='text' name="title" className='form-control' id='studentAge'/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}