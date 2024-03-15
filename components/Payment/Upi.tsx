import React from 'react';
import {Product, Theme} from "@/types";
import orderDetails from "@/components/Checkout/OrderDetails";
import Image from "next/image";
import {useSelector} from "react-redux";
interface Props {
    theme: Theme
}

function CardPayMent({theme}: Props) {
    // @ts-ignore
    const { orderDetails, totalAmount,total, discount } = useSelector((state) => state.cart);
    return (
        <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">

                <form action="" className="mt-10 flex flex-col space-y-4">
                    <div><label htmlFor="email"
                                className="text-xs font-semibold text-gray-500">Email</label><input type="email"
                                                                                                    id="email"
                                                                                                    name="email"
                                                                                                    placeholder="john.capler@fang.com"
                                                                                                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"/>
                    </div>
                    <div className="relative"><label htmlFor="card-number"
                                                     className="text-xs font-semibold text-gray-500">UPI Id</label><input type="text" id="card-number" name="card-number"
                                             placeholder="xxxjohndoe@upi"
                                             className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"/><img
                        src="/upi.png" alt=""
                        className="absolute bottom-3 right-3 max-h-4"/></div>

                    <div><label htmlFor="card-name" className="sr-only">Your Name</label><input type="text"
                                                                                                id="card-name"
                                                                                                name="card-name"
                                                                                                placeholder="Your Name"
                                                                                                className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"/>
                    </div>
                </form>

                <button type="submit"
                        className="mt-4 inline-flex w-full items-center justify-center rounded  py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
                        style={{
                            background: theme["--primary"],
                        }}
                >Place
                    Order
                </button>
            </div>
        </div>
    );
}

export default CardPayMent;