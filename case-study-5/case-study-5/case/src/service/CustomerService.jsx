import axios from "axios";
const URL_CUSTOMER = "http://localhost:8081/customer";
export const getAll = async () => {
  try {
      const href = await axios.get(URL_CUSTOMER);
  }catch (e) {
      alert("Error")
  }
}