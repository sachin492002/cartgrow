export async function getMerchantData(){
    const res = await fetch('https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata',{ next: { revalidate: 3600 } })

    return res.json()
}
//
export async function getOrderDetails(){
    const res = await fetch('https://groww-intern-assignment.vercel.app/v1/api/order-details',{ next: { revalidate: 3600 } })
    return res.json()
}