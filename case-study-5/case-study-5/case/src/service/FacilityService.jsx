import axios from "axios";
const URL_FACILITY = "http://localhost:8081/facility" ;
export const getAll = async () =>{
    try {
    const href = await axios.get(URL_FACILITY);
    return href.data;
    }catch (e) {
        alert("Error")
    }
}