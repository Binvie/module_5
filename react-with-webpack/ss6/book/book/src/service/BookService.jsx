import axios from "axios";

export const getAll = async () => {
    try {
        const list = await axios.get("http://localhost:3000/books");
        return list.data;
    } catch (e) {
        alert("Error");
    }
}
export const createBook = async (value) =>{
    try {
        return await axios.post("http://localhost:3000/books", value);
    }catch (e) {
        alert("Error")
    }
}