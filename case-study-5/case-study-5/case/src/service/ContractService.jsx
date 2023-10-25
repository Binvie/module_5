import React from 'react';
import axios from "axios";

const getAll = async () => {
    try {
        const href = await axios.get("http://localhost:3000/customer")
        return href.data;
    } catch (e) {
        alert("Error");
    }
}