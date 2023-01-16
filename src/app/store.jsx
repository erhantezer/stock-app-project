import { configureStore } from "@reduxjs/toolkit"
import { persistReducer,persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";//! defaults to localStorage for web
import authReducer from "../features/authSlice";
import stockReducer from "../features/stockSlice";



const persistConfig = {
    key: 'root',
    storage: storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
    reducer: {
        auth: persistedReducer,
        stock: stockReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

    devTools: process.env.NODE_ENV !== "production",
})

export const persistor = persistStore(store)
export default store;


//! Redux persist, redux’taki değişkenlerin, sayfa yenilendiğinde,
//! değiştiğinde veya uygulama kapatıp tekrar açıldığında tekrar eski haline dönmesini veya 
//! sıfırlanmasını engellemeye yarayan, bu değişkenleri localstorage da saklayan bir pakettir

//! redux-persist paketi, bir değişkeni tekrar tekrar istek atıp set işlemi yapmak yerine 
//! tek bir istekte setleyip siz değiştirmediğiniz sürece aynı kalması sebebiyle kullanışlı bir pakettir.