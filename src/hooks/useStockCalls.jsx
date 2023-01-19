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
    const getSales = () => getStockData("sales");
    const getCategories = () => getStockData("categories");
    const getProducts = () => getStockData("products");
    const getPurchases = () => getStockData("purchases")


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
    const deleteBrand = (id) => deleteStockData("brands", id);
    const deleteSale = (id) => deleteStockData("sales", id);
    const deleteProduct = (id) => deleteStockData("products", id);
    const deletePurchase = (id) => deleteStockData("purchases", id);



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
    const postProduct = (info) => postStockData(info, "products");
    const postSale = (info) => postStockData(info, "sales");
    const postPurchase = (info) => postStockData(info, "purchases");

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
    const putSale = (info) => putStockData(info, "sales");
    const putPurchase = (info) => putStockData(info, "purchases");

    return {
        getFirms,
        getBrands,
        getSales,
        getCategories,
        getProducts,
        getPurchases,
        deleteFirm,
        deleteBrand,
        deleteSale,
        deleteProduct,
        deletePurchase,
        postFirm,
        postBrands,
        postProduct,
        postSale,
        postPurchase,
        putFirm,
        putBrands,
        putSale,
        putPurchase,
    }

}

export default useStockCalls;