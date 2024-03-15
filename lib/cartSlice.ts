'use client'
import { createSlice } from '@reduxjs/toolkit';
import {state} from "sucrase/dist/types/parser/traverser/base";
import OrderDetails from "@/components/Checkout/OrderDetails";
import {Product} from "@/types";
import {act} from "react-dom/test-utils";

const initialState = {
     orderDetails : null,
     merchantMetaData : null,
     totalAmount : 0,
     total : 0,
     promocode : false,
     discount : 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addOrderDetails : (state,action) => {
            state.orderDetails = action.payload || null;
            // @ts-ignore
            if (state.orderDetails && state.orderDetails?.products) {
                // @ts-ignore
                state.totalAmount = state.orderDetails?.products.reduce((total :number, product:Product) => {
                    return total + (product.price * product.quantity);
                }, 0);
            } else {
                state.totalAmount = 0;
            }
        },
        addMerchantDetails : (state,action) => {
            state.merchantMetaData = action.payload || null;
        },
        addProduct: (state, action) => {
            const id  = action.payload;
            // @ts-ignore
            const existingProduct = state.orderDetails?.products?.find((product:Product) => product.id === id) ;
            if (existingProduct) {
                existingProduct.quantity += 1;
                state.totalAmount += existingProduct.price;
            }
        },
        removeProduct: (state, action) => {
            const id  = action.payload;
            // @ts-ignore
            const existingProduct = state.orderDetails?.products?.find((product:Product) => product.id === id) ;
            if (existingProduct) {
                state.totalAmount -= existingProduct.price;
                existingProduct.quantity -= 1;
            }
        },
        applyPromo : (state,action) =>{
            const dis = action.payload
            state.promocode = true
            state.discount = (state.totalAmount/100)*dis

            state.total = state.totalAmount - state.discount
        },
        calculateToatal : (state) =>{
            state.total = state.totalAmount - state.discount
        }
    },
});

export const {addOrderDetails,addMerchantDetails , addProduct,removeProduct,applyPromo,calculateToatal} = cartSlice.actions;

export default cartSlice.reducer;
