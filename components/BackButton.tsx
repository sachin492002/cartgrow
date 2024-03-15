import React from 'react';
import Link from "next/link";
import {Theme} from "@/types";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

interface Props{
    text : string,
    nav : string,
    theme : Theme,
}
function BackButton({text,nav}:Props) {
    return (
        <div className={``}>
             <Link href={nav} className='inline-flex gap-2 items-center'>
                 <FaArrowLeft className='text-gray-400 '/>
                 <span>{text}</span>
             </Link>
        </div>
    );
}

export default BackButton;