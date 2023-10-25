import axios from "axios";

const URL_CUSTOMER = "http://localhost:8080/customers";
export const getAllCustomer = async () => {
    try {
        const res = await axios.get(URL_CUSTOMER)
        return res.data;
    } catch (e) {
        alert("Error")
    }
}
export const deleteCustomer = async (data) => {
    try {
        return await axios.delete(URL_CUSTOMER)
    } catch (e) {
        alert("Error")
    }
}
export const deleteCustomerService = async (id) => {
    try {
        return await axios.delete(URL_CUSTOMER + `/${id}`)
    } catch (e) {
        alert("Error")
    }
}