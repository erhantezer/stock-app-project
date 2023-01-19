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
            dispatch(getSuccess({ data, url }));
        } catch (error) {
            dispatch(fetchFail())
            console.log(error)
        }
    };
    const getFirms = () => getStockData("firms");
    const getBrands = () => getStockData("brands")



    //!------------- DELETE CALLS ----------------
    const deleteStockData = async (url, id) => {
        try {
            await axiosWithToken.delete(`stock/${url}/${id}/`)
            getStockData(url);
            toastSuccessNotify(`${url} successfuly deleted`);
        } catch (error) {
            console.log(error);
            toastErrorNotify(`${url} can not be deleted`);
        }
    }

    const deleteFirm = (id) => deleteStockData("firms", id);


    //!------------- POST CALLS ----------------
    const postStockData = async (info, url) => {
        try {
            await axiosWithToken.post(`stock/${url}/`, info);
            toastSuccessNotify(`${url} successfuly added`);
            getStockData(url);
        } catch (error) {
            console.log(error);
            toastErrorNotify(`${url} can not be added`);
        }
    };

    const postFirm = (info) => postStockData(info, "firms");
    const postBrands = (info) => postStockData(info, "brands");


    //!------------- PUT CALLS ----------------
    const putStockData = async (info, url) => {
        try {
            await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
            toastSuccessNotify(`${url} successfuly updated`);
            getStockData(url);
        } catch (error) {
            console.log(error);
            toastErrorNotify(`${url} can not be updated`);
        }
    };

    const putFirm = (info) => putStockData(info, "firms");
    const putBrands = (info) => putStockData(info, "brands");

    return {
        getFirms,
        deleteFirm,
        postFirm,
        putFirm,
        getBrands,
        putBrands,
        postBrands,
    }

}

export default useStockCalls;