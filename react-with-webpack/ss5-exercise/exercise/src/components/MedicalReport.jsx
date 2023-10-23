import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

function MedicalReport() {
    const handleValidate = {
        name: Yup.string()
            .required(),
        email: Yup.string()
            .required()
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, "Invalid email address"),
        phone: Yup.string()
            .required(),
        identity: Yup.string()
            .required(),
        yearBorn: Yup.number()
            .min(1900, "Should be greater than 1900"),
        nation: Yup.string()
            .required(),
        city: Yup.string()
            .required(),
        district: Yup.string()
            .required(),
        hood: Yup.string()
            .required(),
        address: Yup.string()
            .required(),
    }
    return (
        <>
            <Formik initialValues={{
                name: "",
                identity: "",
                yearBorn: 0,
                email: "",
                phone: "",
                nation: "",
                company: "",
                working: "",
                medicalPaper: "",
                city: "",
                district: "",
                hood: "",
                address: "",
                gender: 0,
            }} onSubmit={(event) => {
                event.yearBorn = +event.yearBorn;
                event.gender = +event.gender
                console.log(event)
                alert("ok")
            }} validationSchema={Yup.object(handleValidate)}>

                <div className="container px-5 my-5">
                    <h1 className="text text-center text-warning">Tờ Khai Y Tế</h1>
                    <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="họTen">Họ tên</label>
                            <Field className="form-control" name="name" id="name" type="text" placeholder="name"
                                   data-sb-validations=""/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="identity">Số hộ chiếu/CMND</label>
                            <Field className="form-control" name="identity" id="identity" type="text"
                                   placeholder="Số hộ chiếu/CMND" data-sb-validations=""/>
                            <ErrorMessage name="identity" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="yearBorn">Năm sinh</label>
                            <Field className="form-control" name="yearBorn" id="yearBorn" type="text"
                                   placeholder="Số hộ chiếu/CMND"
                                   data-sb-validations=""/>
                            <ErrorMessage name="yearBorn" component="div" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label className="form-label d-block">Giới tính</label>
                            <div className="form-check form-check-inline">
                                <Field as="select" className="form-check-input" name="gender" id="nam"
                                       data-sb-validations="" value="1"/>
                                <label className="form-check-label" htmlFor="nam">Nam</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field as="select" className="form-check-input" name="gender" id="nữ"
                                       data-sb-validations="" value="0"/>
                                <label className="form-check-label" htmlFor="nữ">Nữ</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="nation">Quốc tịch</label>
                            <Field className="form-control" name="nation" id="nation" type="text"
                                   data-sb-validations=""/>
                            <ErrorMessage name="nation" component="div" style={{color: "red"}}></ErrorMessage>

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Công ty làm việc</label>
                            <Field className="form-control" name="company" type="text"
                                   placeholder="Công ty làm việc"
                                   data-sb-validations=""/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Bộ phận làm việc</label>
                            <Field className="form-control" name="working" type="text"
                                   placeholder="Bộ phận làm việc"
                                   data-sb-validations=""/>
                        </div>
                        <div className="mb-3">
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" name="medicalPaper"
                                       type="checkbox"
                                       data-sb-validations=""/>
                                <label className="form-check-label">Có thẻ bảo hiểm y
                                    tế</label>
                            </div>
                        </div>
                        <h1 className="text text-center text-warning">Địa chỉ liên lạc tại Việt Nam</h1>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="tỉnhThanh">Tỉnh thành</label>
                            <Field className="form-control" name="city" id="city" type="text"
                                   data-sb-validations=""/>
                            <ErrorMessage name="city" component="div" style={{color: "red"}}></ErrorMessage>

                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="district">Quận/ huyện</label>
                            <Field className="form-control" id="district" type="text"
                                   data-sb-validations=""/>
                            <ErrorMessage name="district" component="div" style={{color: "red"}}></ErrorMessage>

                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="hood">Phường xã</label>
                            <Field className="form-control" name="hood" id="hood" type="text"
                                   data-sb-validations=""/>
                            <ErrorMessage name="hood" component="div" style={{color: "red"}}></ErrorMessage>

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Số nhà, phố, tổ dân
                                phố/thôn/đội</label>
                            <Field className="form-control" name="address" type="text"
                                   placeholder="Số nhà, phố, tổ dân phố/thôn/đội" data-sb-validations=""/>
                            <ErrorMessage name="address" component="div" style={{color: "red"}}></ErrorMessage>

                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="Phone">Điện thoại</label>
                            <Field className="form-control" name="phone" id="Phone" type="text"
                                   data-sb-validations=""/>
                            <ErrorMessage name="phone" component="div" style={{color: "red"}}></ErrorMessage>

                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="emailAddress">Email Address</label>
                            <Field className="form-control" name="email" id="emailAddress" type="email"
                                   placeholder="Email Address"
                                   data-sb-validations="email"/>
                            <ErrorMessage name="email" component="div" style={{color: "red"}}></ErrorMessage>

                        </div>
                        <hr/>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="direction">Trong 14 ngày qua, Anh/chị có đến
                            quốc gia/ vùng lãnh thổ nào(có thể đi qua nhiều nước)</label>
                            <Field className="form-control" name="direction" id="direction" type="text-area"
                                   placeholder="Email Address"/>
                            <ErrorMessage name="direction" component="div" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <label className="form-check-label">
                            Trong 14 ngày qua, Anh/chị có thấy xuất hiện dấu hiệu nào sau đây không?
                        </label>
                        <div className="form-check">
                            <Field name="languages" className="form-check-input" type="checkbox" value="Sốt" id="cb1"/>
                            <label className="form-check-label" htmlFor="cb1">
                                Sốt
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="languages" className="form-check-input" type="checkbox" value="Ho" id="cb1"/>
                            <label className="form-check-label" htmlFor="cb1">
                                Ho
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="languages" className="form-check-input" type="checkbox" value="Khó thở" id="cb1"/>
                            <label className="form-check-label" htmlFor="cb1">
                                Khó thở
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="languages" className="form-check-input" type="checkbox" value="Viêm phổi" id="cb1"/>
                            <label className="form-check-label" htmlFor="cb1">
                                Viêm phổi
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="languages" className="form-check-input" type="checkbox" value="Đau họng" id="cb1"/>
                            <label className="form-check-label" htmlFor="cb1">
                                Đau họng
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="languages" className="form-check-input" type="checkbox" value="Mệt mỏi" id="cb1"/>
                            <label className="form-check-label" htmlFor="cb1">
                                Mệt mỏi
                            </label>
                        </div>
                        <label className="form-check-label">
                            Trong 14 ngày qua, Anh/chị có tiếp xúc với?
                        </label>
                        <div className="form-check">
                            <Field name="languages" className="form-check-input" type="checkbox"
                                   value="Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19." id="cb1"/>
                            <label className="form-check-label" htmlFor="cb1">
                                Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19.
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="languages" className="form-check-input" type="checkbox"
                                   value="Người từ nước có bệnh COVID-19" id="cb1"/>
                            <label className="form-check-label" htmlFor="cb1">
                                Người từ nước có bệnh COVID-19.
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="languages" className="form-check-input" type="checkbox"
                                   value="Người có biếu hiện(Sốt, ho, khó thở, viêm phổi)" id="cb1"/>
                            <label className="form-check-label" htmlFor="cb1">
                                Người có biếu hiện(Sốt, ho, khó thở, viêm phổi.
                            </label>
                        </div>
                        <br/>
                        <hr/>
                        <div className="d-grid">
                            <button className="btn btn-primary" id="submitButton"
                                    type="submit">Submit
                            </button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
    );
}

export default MedicalReport;