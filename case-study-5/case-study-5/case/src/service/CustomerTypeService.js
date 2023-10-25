import axios from "axios";

const URL_CUSTOMER_TYPE = "http://localhost:8080/types";

export const getAllType = async () => {
    try {
        return await axios.get(URL_CUSTOMER_TYPE);
    } catch (e) {
        alert("Error")
    }
}
