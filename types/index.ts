
export type Product = {
    id : number,
    title : string,
    price : number,
    image : string,
    quantity : number
}
export type Theme = {
    "--background" : string,
    "--foreground" : string,
    "--primary" : string,
    "--primary-foreground" : string
}
export type MerchantData = {
    merchantName : string,
    merchantLogo : string,
    theme : Theme
}
export type OrderDetails = {
    products : [Product],
    paymentMethods : [string],
}

