'use client'
import React, { useState } from 'react';
import { MerchantData } from "@/types";
import {useDispatch, useSelector} from "react-redux";
import theme from "tailwindcss/defaultTheme";
import {formatDynamicImportPath} from "next/dist/lib/format-dynamic-import-path";
import {applyPromo, calculateToatal} from "@/lib/cartSlice";
import Link from "next/link";

interface Props {
    merchant: MerchantData,
}

const promos = [
    {
        name: 'XCVFG2',
        off: 10,
    },
    {
        name: 'HJK343',
        off: 20,
    }
];

function OrderSummary({ merchant }: Props) {
    // @ts-ignore
    const { orderDetails, totalAmount, discount, promocode } = useSelector((state) => state.cart);
    const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
    const dispatch = useDispatch()
    const handlePromo = (off: number, promoName: string) => {
        dispatch(applyPromo(off))
        setAppliedPromo(promoName);
    };
    const handlePay = () =>{
        dispatch(calculateToatal())
    }

    return (
        <div className='w-full md:w-1/3   flex flex-col gap-4 px-6 py-2 text-white opacity-95'
             style={{
                 backgroundImage: `linear-gradient(to bottom, ${merchant.theme["--primary"]}, ${merchant.theme["--primary-foreground"]})`
             }}
        >
            <div className='flex flex-col'>
                <p className='text-xl font-bold'>John Doe</p>
                <p className='font-light'>street ab, Ny</p>
                <p className='font-light'>+919800999289</p>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='text-xl font-bold'>Apply Promo Code</span>
                <div className='inline-flex gap-2'>
                    {promos?.map((promo) => (
                        <div
                            key={promo.name}
                            className='px-4 py-2 flex flex-col cursor-pointer'
                            onClick={() => handlePromo(promo.off, promo.name)}
                            style={{
                                background: appliedPromo === promo.name ? 'green' : merchant.theme['--primary-foreground']
                            }}
                        >
                            <span className='text-md' style={{ color: merchant.theme['--primary'] }}>
                                {promo.name}
                            </span>
                            <span className='text-xs'>{promo.off}%</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='text-xl font-bold'>Order Summary</p>
                <div className='flex flex-col'>
                    <span>Order Amount: {totalAmount}$</span>
                    <span>Discount: -{discount}$</span>
                    {promocode && <span className='text-lime-500'>promocode successfully applied </span> }
                </div>
                <span className='font-bold py-4'
                      style={{
                          color : merchant.theme["--primary"]
                      }}
                >Total: {totalAmount - discount}$</span>
            </div>
            <div>
                <Link href='/payment'>
                <button style={{
                    background : merchant.theme["--primary-foreground"],
                    color : merchant.theme["--primary"]
                }} className='px-6 py-2 rounded-md' onClick={handlePay}>Make Payment</button></Link>
            </div>
        </div>
    );
}

export default OrderSummary;
