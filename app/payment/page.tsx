'use client'
import React, {useState} from 'react';
import Header from "@/components/Header";
import {useDispatch, useSelector} from "react-redux";
import Upi from "@/components/Payment/Upi";
import BackButton from "@/components/BackButton";
import CardPayment from "@/components/Payment/Card";
import {Product} from "@/types";
import Image from "next/image";

import {useRouter} from "next/navigation";

function Page() {
    // @ts-ignore
    const { orderDetails,merchantMetaData: merchant, totalAmount,total, discount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    const [method, setMethod] = useState("CARDS");

    const handlePayMethod = (method :string) => {
        setMethod(method);
    };
    const router = useRouter();
    const handleSubmit= (e:any) =>{
        e.preventDefault()
        router.push('/confirm');
    }

    return (
        <div className={'px-2 md:px-20 bg-white w-full min-h-dvh'}>
            <Header merchant={merchant}/>
            <div className={'w-full  inline-flex '}>
                <BackButton text={'back to cart'} nav={'/'} theme={merchant?.theme}/>
                <span className='text-center font-bold font-serif text-3xl mx-auto' style={{
                    color: merchant?.theme['--primary']
                }}>Secure Payment</span>
            </div>
            <div className='w-full '>
                <div className='w-1/2 flex flex-row justify-between'>
                    <button className="relative text-2xl font-medium text-gray-700 sm:text-3xl"
                            onClick={() => handlePayMethod("CARDS")}>CARD{(method === "CARDS") && <span
                        className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>}</button>
                    <button className="relative text-2xl font-medium text-gray-700 sm:text-3xl"
                            onClick={() => handlePayMethod("UPI")}>UPI{(method === "UPI") && <span
                        className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>}</button>
                </div>
                <div className="relative mx-auto w-full bg-white">
                    <div className="grid min-h-screen grid-cols-10">
                        {
                            orderDetails?.paymentMethods?.includes("CARDS") && (method === "CARDS") &&
                            <CardPayment theme={merchant?.theme} handleSubmit={handleSubmit}/>
                        }
                        {
                            orderDetails?.paymentMethods?.includes("UPI") && (method === "UPI") && <Upi theme={merchant?.theme} handleSubmit={handleSubmit}/>
                        }
                        <div
                            className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
                            <h2 className="sr-only">Order summary</h2>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                    alt="" className="absolute inset-0 h-full w-full object-cover"/>
                                <div
                                    className="absolute inset-0 h-full w-full  opacity-95"
                                    style={{
                                        backgroundImage: `linear-gradient(to bottom, ${merchant?.theme["--primary"]}, ${merchant?.theme["--primary-foreground"]})`
                                    }}
                                ></div>
                            </div>
                            <div className="relative">
                                <ul className="space-y-5">
                                    {
                                        orderDetails?.products?.map((pro: Product) => {
                                            return (
                                                <li className="flex justify-between">
                                                    <div className="inline-flex">
                                                        <Image
                                                            src={pro.image}
                                                            width={40}
                                                            height={20} alt="" className="max-h-16"/>
                                                        <div className="ml-3">
                                                            <p className="text-base font-semibold text-white">{pro.title}</p>
                                                            <p className="text-sm font-medium text-white text-opacity-80">Qty
                                                                : {pro.quantity}</p>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm font-semibold text-white">${pro.price}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                                <div className="space-y-2">
                                    <p className="flex justify-between text-sm font-medium text-white">
                                        <span>Total : </span><span>{totalAmount}$</span></p>
                                    <p className="flex justify-between text-sm font-medium text-white">
                                        <span>Discount : </span><span>-{discount}$</span></p>
                                    <p className="flex justify-between text-lg font-bold text-white">
                                        <span>Total price:</span><span>{total}$</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
