import React from 'react';
import {MerchantData} from "@/types";
import BackButton from "@/components/BackButton";
import OrderDetails from "@/components/Checkout/OrderDetails";
import OrderSummary from "@/components/Checkout/OrderSummary";
import Header from "@/components/Header";

interface Props {
    merchant: MerchantData
}

function Checkout({merchant}: Props) {
    return (
        <div className={'flex flex-col md:flex-row w-full h-dvh'}>
        <div className={`flex flex-col gap-4 px-2 md:px-20 w-full md:w-2/3 bg-white`}

            >
            <div className='flex justify-center w-full'>
                <Header merchant={merchant}/>
                <span
                className='text-3xl font-serif font-bold  text-center'>CheckOut</span></div>
            <div className={''}>
                <BackButton text={'continue shopping'} nav={'/'} theme={merchant?.theme}/>
            </div>
            <OrderDetails merchant={merchant}/>
        </div>
        <OrderSummary merchant={merchant}/>
        </div>
    );
}

export default Checkout;