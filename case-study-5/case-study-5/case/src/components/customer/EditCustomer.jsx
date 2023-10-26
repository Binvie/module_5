import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getAllTypeCustomer} from "../customerType/CustomerType.jsx";
import {editCustomerService, findCustomerService} from "../../service/CustomerService.jsx";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

function EditCustomer() {
    const navigate = useNavigate();
    const [types, setTypes] = useState([]);
    const [customer, setCustomer] = useState();
    const {id} = useParams();

    useEffect(() => {
        customerValue();
        displayTypes()
    }, []);

    const displayTypes = async () => {
        const res = await getAllTypeCustomer()
        setTypes(res)
    }

    const customerValue = async () => {
        const res = await findCustomerService(id)
        setCustomer(res);
    }
    const editCustomer = async (data) => {
        const res = {...data, typeCustomer: JSON.parse(data.typeCustomer)}
        await editCustomerService(res)
        navigate("/customers")
        toast("Edit Successfully")
    }

    const today1 = new Date();
    const years18 = new Date(today1);
    years18.setFullYear(today1.getFullYear() - 18);

    if (!customer) {
        return null;
    }
    const handleValidateEdit = {
        name: Yup.string()
            .required()
            .matches(/^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/, "invalid name: first letter should be uppercase!"),
        email: Yup.string()
            .required()
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "invalid Email"),
        phone: Yup.string()
            .required()
            .matches(/^[0-9]{10}$/, "invalid phone number, 10 numbers"),
        idCard: Yup.string()
            .required()
            .matches(/^[0-9]{10}$/, "invalid ID card,include 10 numbers"),
        birthday: Yup.date()
            .required()
            .max(years18, "Should be greater than 18 years-old")

    }
    const initialValue = {
        "id": customer.id,
        "name": customer.name,
        "birthday": customer.birthday,
        "gender": customer.gender,
        "idCard": customer.idCard,
        "phone": customer.phone,
        "email": customer.email,
        "typeCustomer": JSON.stringify(customer.typeCustomer)
    }
    return (
        <div>
            <Formik initialValues={initialValue} onSubmit={(customer) => {
                editCustomer(customer)
            }}
                    validationSchema={Yup.object(handleValidateEdit)}
            >
                <div className="container px-5 my-5">
                    <h1 className="text text-center text-warning">Edit Customer</h1>
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
        </div>
    );
}

export default EditCustomer;