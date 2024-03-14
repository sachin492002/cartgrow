import {configureStore} from '@reduxjs/toolkit';


import cartReducer from './cartSlice';
import {Api} from "@/store/services";

export const store = configureStore({
    reducer: {
        [Api.reducerPath]: Api.reducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Api.middleware),
});
