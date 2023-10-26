import axios from "axios";

export const getAllTypeCustomer = async () => {
    try {
        const res = await axios.get("http://localhost:8080/typeCustomer")
        return res.data;
    } catch (e) {
        alert("Error")
    }
}