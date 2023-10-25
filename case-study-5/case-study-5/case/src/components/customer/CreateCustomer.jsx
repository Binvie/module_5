import {getAll} from "../../service/CustomerService";
import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import async from "async";
import {getAllType} from "../../service/CustomerTypeService.js";

function CreateCustomer() {
    const navigate = useNavigate();
    const [types, setTypes] = useState([])

    useEffect(() => {
        getTypes();
    }, []);
    const getTypes = async () => {
        setTypes(getAllType);
    }
    const x = () => {

    }
    return (
        <>

        </>
    );
}

export default CreateCustomer;