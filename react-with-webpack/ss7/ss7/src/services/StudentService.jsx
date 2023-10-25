import axios from "axios";

const URL_STUDENTS = "http://localhost:8080/students"

export  const getAllStudent = async () => {
    try{
        let temp = await axios.get(URL_STUDENTS);
        return temp.data;
    }catch (e) {

    }
};

export const createNewStudent = async (value) => {
    try{
        let temp = await axios.post(URL_STUDENTS, value);
        return temp;
    }catch (e) {
    }
}
