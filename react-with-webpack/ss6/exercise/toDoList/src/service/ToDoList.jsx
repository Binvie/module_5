import axios from "axios";

export const getList = async () =>{
    try {
        const href = await axios.get("http://localhost:8080/list")
        return href.data;
    }catch (e) {
        alert("Error")
    }
}
export const createJob = async (value) =>{
    try {
        return await axios.post("http://localhost:8080/list", value);
    }catch (e) {
        alert("Error")
    }
}