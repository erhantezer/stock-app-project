import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import { useDispatch } from 'react-redux'
import useAxios from './useAxios';
import {
    fetchFail,
    fetchStart,
    getSuccess,
  } from "../features/stockSlice";

const useStockCalls = () => {
const dispatch = useDispatch();
const { axiosWithToken } = useAxios()

 //!------------- GET CALLS ----------------
    const getStockData = async (url) => {
        dispatch(fetchStart());
        try {
            const { data } = await axiosWithToken.get(`stock/${url}/`);
            dispatch(getSuccess({data, url}));
        } catch (error) {
            dispatch(fetchFail())
            console.log(error)
        }
    };
    const getFirms = () => getStockData("firms");



//!------------- DELETE CALLS ----------------
const deleteStockData = async (url, id) => {
    try {
        await axiosWithToken.delete(`stock/${url}/${id}/`)
        toastSuccessNotify(`${url} successfuly deleted`);
    } catch (error) {
        console.log(error);
        toastErrorNotify(`${url} can not be deleted`);
    }
}

const deleteFirm = (id) => deleteStockData("firms", id);


 //!------------- POST CALLS ----------------

  return {
    getFirms,
    deleteFirm,
}
    
}

export default useStockCalls