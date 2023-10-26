import axios from "axios";
import data from "bootstrap/js/src/dom/data.js";

const URL_CUSTOMER = "http://localhost:8080/customers";
export const getAllCustomer = async () => {
    try {
        const res = await axios.get(URL_CUSTOMER)
        return res.data;
    } catch (e) {
        alert("Error")
    }
}

export const createCustomerService = async (value) =>{
    try {
        const res = await  axios.post(URL_CUSTOMER,value)
        return res;
    }catch (e) {
        alert("Error")
    }
}
export const deleteCustomer = async (id) => {
    console.log(id)
    try {
        return await axios.delete(URL_CUSTOMER + `/${id}`)
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

export const findCustomerService = async (id) => {
    try {
        const res =  await axios.get(URL_CUSTOMER + `/${id}`)
        return res.data
    }catch (e) {
        alert("Error")
    }
}
export const editCustomerService = async (value) =>{
    try {
        return await axios.put(URL_CUSTOMER + `/${value.id}`,value)
    }catch (e) {
        alert("Error")
    }
}