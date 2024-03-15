
import {getMerchantData, getOrderDetails} from "@/actions";
import Checkout from "@/components/Checkout/checkout";

import {useEffect} from "react";
import {addMerchantDetails, addOrderDetails} from "@/lib/cartSlice";




export default async function Home() {
    const merchant = await getMerchantData();

    return (
        <main>
            <Checkout merchant={merchant}/>
        </main>
    );
}
