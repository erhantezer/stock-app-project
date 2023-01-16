import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} from "../features/authSlice";
import axios from "axios";



const useAuthCalls = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();


  //! Login işlemi yaptığımızda custom hook yazarak Login.jsx i karmaşıklığı azaltmak için 
  //! burada yaptık yup işlemini de burda yapabilirdik.
  const login = async (userInfo) => {
    const url = "https://13549.fullstack.clarusway.com/account/auth/login/"
    try {
      const { data } = await axios.post(url, userInfo);
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login performed");
      navigate("/stock");

    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login can not be performed");
    }
  };


  //! Logout işlemi yaptığımızda custom hook yazarak Dashboard.jsx i karmaşıklığı azaltmak için burada yaptık 
  const logout = async () => {
    dispatch(fetchStart());
    const url = "https://13549.fullstack.clarusway.com/account/auth/logout/"

    try {
      await axios.post(url);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout performed");
      navigate("/");

    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Logout can not be performed");
    }
  }


  //! Register işlemi yaptığımızda custom hook yazarak Register.jsx i karmaşıklığı azaltmak için 
  //! burada yaptık yup işlemini de burda yapabilirdik.
  const register = async (userInfo) => {
    dispatch(fetchStart());
    const url = "https://13549.fullstack.clarusway.com/account/register/"

    try {
      const { data } = await axios.post(url, userInfo);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register performed");
      navigate("/stock");

    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Register can not be performed");
    }
  }



  return { login, logout, register }


}

export default useAuthCalls