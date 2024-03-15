import React from 'react';
import {Product, Theme} from "@/types";
import Image from "next/image";
import {useDispatch} from "react-redux";
import {addProduct, removeProduct} from "@/lib/cartSlice";

interface Props {
    product: Product,
    theme: Theme
}

function ProductCard({product, theme}: Props) {
    const dispatch = useDispatch();
    const handleChange = (id :number,op:string)=>{
        if(op==="add"){
             dispatch(addProduct(id))
        }
        else{
            dispatch(removeProduct(id))
        }
    }
    return (
        <div className={'inline-flex'}>
            <Image src={product?.image} className={`w-20 h-20 object-contain`} alt={'no'} width={50} height={50}/>
            <div className={'flex w-full justify-between'}>
                <div className='flex flex-col px-2 justify-between'>
                    <span className='text-2xl font-serif line-clamp-1'>{product?.title}</span>
                    <span className={'text-xl  flex items-center'}
                          style={
                              {
                                  color: theme["--primary"]
                              }
                          }
                    >
                    <p>${product.price}</p>
                    </span>
                </div>
                <div className={'inline-flex gap-2 items-center text-2xl'}>
                    <button onClick={()=>handleChange(product.id,"add")}>+</button>
                    {product.quantity}
                    <button onClick={()=>handleChange(product.id,"remove")}>-</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;