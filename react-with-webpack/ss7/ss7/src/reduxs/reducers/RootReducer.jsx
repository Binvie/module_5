import {CREATE, GET_ALL} from "../ActionType";

const studentReducer = (students = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_ALL :
            return payload;
        case CREATE:
            return [...students, payload];
        default:
            return students;
    }
}
export default studentReducer;
