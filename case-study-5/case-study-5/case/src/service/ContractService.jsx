import axios from "axios";

const URL_CONTRACT = "http://localhost:8080/contracts";

export const getAllContractService = async () => {
    try {
        const res = await axios.get("http://localhost:8080/contracts")
        console.log(res.data)
        return res.data;
    } catch (e) {
        alert("Error");
    }
}

export const deleteContractService = async (id) => {
    try {
        return await axios.delete(URL_CONTRACT + `/${id}`)

    } catch (e) {
        alert("Error")
    }
}

export const createContractService = async (value) => {
    try {
        const res = await axios.post(URL_CONTRACT, value)
        return res;
    } catch (e) {
        alert("Error")
    }
}

export const editContractService = async (value) => {
    try {
        const res = await axios.put(URL_CONTRACT + `/${value.id}`,value)
        return res
    } catch (e) {
        alert("Error")
    }
}

export const findContractService = async (value) =>{
    try {
        const res = await  axios.get(URL_CONTRACT + `/${value.id}`,value)
        return res.data
    }catch (e) {
        alert("Error")
    }
}