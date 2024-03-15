import React from 'react';
import Image from "next/image";
import {MerchantData} from "@/types";

interface Props{
   merchant : MerchantData,
}
function Header({merchant} : Props) {

    return (
        <div className={'w-full gap-2 py-2 flex items-center'}>
            <Image src={merchant?.merchantLogo} alt={'not available'} width={28} height={28}/>
            <span className='font-bold font-serif '>{merchant?.merchantName}</span>
        </div>
    );
}

export default Header;