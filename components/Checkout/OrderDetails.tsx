'use client'
import React, { useEffect } from 'react';
import {MerchantData, Product} from "@/types";
import {getMerchantData, getOrderDetails} from "@/actions";
import {useDispatch, useSelector} from "react-redux";
import {addMerchantDetails, addOrderDetails} from "@/lib/cartSlice";
import ProductCard from "@/components/Checkout/ProductCard";

interface Props {
    merchant: MerchantData,
}

function OrderDetails({ merchant }: Props) {
    // Fetch orders inside useEffect
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const orders = await getOrderDetails();
                const merchant = await getMerchantData();
                dispatch(addMerchantDetails(merchant))
                console.log(orders)
                dispatch(addOrderDetails(orders));
            } catch (error) {
                console.error("Error fetching order details:", error);
            }
        };
        fetchOrders();
    }, []);
    // @ts-ignore
    const {orderDetails} = useSelector((state) => state.cart)
    return (
        <div className={`w-full flex flex-col`}>
            <div className='inline-flex w-full justify-between items-end'>
                 <span className={`text-4xl font-bold`}>Your Order</span>
                <span className={`text-lg `} style={{
                    color : merchant.theme["--primary"]
                }}>{orderDetails?.products.length} items</span>
            </div>
            <div className='flex flex-col py-6 gap-4'>
            {
          orderDetails?.products?.map((product : Product)=>{
              return   <ProductCard product={product} theme={merchant?.theme} key={product.id}/>
          })
            }
            </div>
        </div>
    );
}

export default OrderDetails;
