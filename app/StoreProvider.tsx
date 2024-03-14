'use client'
import useOrderStore from "@/lib/store";

export default function AppInitializer({ orders , merchantdata , children }) {
    useOrderStore.setState({
        orderDetails: orders,
        merchantMetadata: merchantdata,
    })

    return children
}