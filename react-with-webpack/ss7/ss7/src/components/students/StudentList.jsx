import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import * as studentService from "../../services/StudentService"
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getAll} from "../../reduxs/middlewares/StudentMiddleware";

export function StudentList() {

    const students = useSelector(store => store.students);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());

    }, []);

    const getAllStudent = async () => {
        try {
            let data = await studentService.getAllStudent();
            setStudents(data);
        } catch (e) {
        }

        if (!students) {
            return null;
        }
        return (
            <>
                <NavLink to="/students/create">
                    <button>Create</button>
                </NavLink>
                <h1>Student List</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Languages</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        students ?
                            students.map((temp, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{temp.id}</td>
                                        <td>{temp.name}</td>
                                        <td>{temp.gender === 1 ? "Nam" : "Nữ"}</td>
                                        <td>{temp.age}</td>
                                        <td>{temp.languages.map((value, index) => {
                                            return <span key={index}>{value}</span>
                                        })}</td>
                                    </tr>
                                )
                            }) : ""
                    }
                    </tbody>
                </table>
            </>
        )
    }
}
