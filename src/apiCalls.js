import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axiosInstance.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
    alert(err.response.data ? err.response.data.message : err.message);
    // console.log(err.response.data ? err.response.data.message : err.message);
  }
};

export const registerCall = async (userCredential, dispatch) => {
  dispatch({ type: "REGISTER_START" });
  try {
    const res = await axiosInstance.post("/auth/register", userCredential);
    dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "REGISTER_FAILURE", payload: err });
    alert(err.response.data ? err.response.data.message : err.message);
    // console.log(err.response.data ? err.response.data.message : err.message);
  }
};
