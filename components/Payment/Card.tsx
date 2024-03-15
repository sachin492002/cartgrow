import React from 'react';
import {Theme} from "@/types";

interface Props{
    theme : Theme,
    handleSubmit : any
}
function CardPayment({theme,handleSubmit}:Props) {
    return (
        <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">

                <form onSubmit={handleSubmit} className="mt-10 flex flex-col space-y-4">
                    <div><label htmlFor="email"
                                className="text-xs font-semibold text-gray-500">Email</label><input type="email"
                                                                                                    id="email"
                                                                                                    name="email"
                                                                                                    placeholder="john.capler@fang.com"
                                                                                                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"/>
                    </div>
                    <div className="relative"><label htmlFor="card-number"
                                                     className="text-xs font-semibold text-gray-500">Card
                        number</label><input type="text" id="card-number" name="card-number" required={true}
                                             placeholder="1234-5678-XXXX-XXXX"
                                             className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"/><img
                        src="/visa.png" alt=""
                        className="absolute bottom-3 right-3 max-h-4"/></div>
                    <div>
                        <p className="text-xs font-semibold text-gray-500">Expiration date</p>
                        <div className="mr-6 flex flex-wrap">
                            <div className="my-1">
                                <label htmlFor="month" className="sr-only">Select expiration month</label
                                ><input name="month" id="month" placeholder={'MM'} required={true}
                                        className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                            </input>
                                <span>/</span>
                            </div>
                            <div className="my-1 ml-3 mr-6">
                                <label htmlFor="year" className="sr-only">Select expiration year</label
                                ><input name="year" id="year" placeholder={"YYYY"} required={true}
                                        className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">

                            </input>
                            </div>
                            <div className="relative my-1"><label htmlFor="security-code" className="sr-only">Security
                                code</label><input type="text" id="security-code" name="security-code" required={true}
                                                   placeholder="Security code"
                                                   className="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"/>
                            </div>
                        </div>
                    </div>
                    <div><label htmlFor="card-name" className="sr-only">Card name</label><input type="text"
                                                                                                required={true}
                                                                                                id="card-name"
                                                                                                name="card-name"
                                                                                                placeholder="Name on the card"
                                                                                                className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"/>
                    </div>
                    <button type="submit"

                            className="mt-4 inline-flex w-full items-center justify-center rounded  py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
                            style={{
                                background: theme["--primary"],
                            }}
                    >Place
                        Order
                    </button>
                </form>

            </div>
        </div>
    );
}

export default CardPayment;