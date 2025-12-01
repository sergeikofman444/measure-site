import Link from 'next/link';
import { useState } from 'react';


export default function MenuItem({ item, onClose }: { item: string, onClose: any }) {
    const slug = (item === 'home' ? '' : item.toLocaleLowerCase())

    return (
        <Link
            href={`/${slug}`} 
            className="group rounded p-2 hover:scale-104 hover:font-bold duration-50 transition-transform"
            onClick={()=>onClose()}
        >
            {item.toLocaleUpperCase()}
        </Link>
    );
}