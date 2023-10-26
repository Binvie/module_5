import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {createContractService} from "../../service/ContractService.jsx";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
function CreateContract() {
    const navigate = useNavigate();

    const createContract = async (data) => {
        await createContractService(data)
        navigate("/contracts")
        toast("Create Successfully")
    }

    const initialValue = {
        "contractNumber": "",
        "startDate": "",
        "endDate": "",
        "depositAmount": 0,
        "totalPaymentAmount": 0
    }
    const validateContract = {
        depositAmount: Yup.string()
            .min(0, "greater than 0"),
        totalPaymentAmount: Yup.string()
            .min(0, "greater than 0"),
        startDate: Yup.date()
            .required(),
        // .min(validateDate, "must be before end date")
        endDate: Yup.date()
            .required(),
        contractNumber: Yup.string()
            .required()
            .matches(/^HD\d{3}$/,"invalid code")

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

export default CreateContract;