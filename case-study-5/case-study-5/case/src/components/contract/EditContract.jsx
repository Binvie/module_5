import React, {useEffect, useState} from 'react';
import Header from "../Header.jsx";
import {NavLink} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Footer from "../Footer.jsx";
import {editContractService} from "../../service/ContractService.jsx";

function EditContract() {
    const [contract, setContract] = useState()

    useEffect((data) => {

    }, []);

    const editContract = async () =>{
        const res = await  editContractService()
    }
    return (
        <div>
            <Header/>
            <h1 className="text text-center text-warning">Create new Contract</h1>
            <NavLink to="/contracts">
                <button className="btn btn-primary">Back to contract list</button>
            </NavLink>
            <Formik initialValues={initialValue} onSubmit={value =>{
                createContract(value)
            }}
                    validationSchema={Yup.object(validateContract)}
            >
                <div className="container px-5 my-5">
                    <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="contractNumber"><b>Contract Number</b><span
                                style={{color: "red"}}>*</span></label>
                            <Field className="form-control" id="contractNumber" type="text"
                                   name="contractNumber"/>
                            <ErrorMessage className="text text-danger" name="contractNumber" component="div"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="startDate"><b>Start Date</b><span
                                style={{color: "red"}}>*</span></label>
                            <Field className="form-control" id="startDate" type="date" name="startDate"
                                   data-sb-validations=""/>
                            <ErrorMessage className="text text-danger" name="startDate" component="div"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="endDate"><b>End Date</b><span
                                style={{color: "red"}}>*</span></label>
                            <Field className="form-control" id="endDate" type="date" name="endDate"
                                   placeholder="Birthday"
                                   data-sb-validations=""/>
                            <ErrorMessage className="text text-danger" name="endDate" component="div"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="depositAmount"><b>Deposit Amount</b><span
                                style={{color: "red"}}>*</span></label>
                            <Field className="form-control" name="depositAmount" id="depositAmount" type="text"
                                   data-sb-validations=""/>
                            <ErrorMessage className="text text-danger" name="depositAmount" component="div"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="totalPaymentAmount"><b>Total Payment</b><span
                                style={{color: "red"}}>*</span></label>
                            <Field className="form-control" name="totalPaymentAmount" id="totalPaymentAmount" type="text"
                                   data-sb-validations=""/>
                            <ErrorMessage className="text text-danger" name="totalPaymentAmount" component="div"/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </div>
            </Formik>
            <Footer/>
        </div>
    );
}

export default EditContract;