'use client';
import Image from 'next/image';
import { menuItems } from '@/constants/menu'
import MenuItem from './Menu'

export default function Header() {
    return (
        <>
            <div className="relative w-full h-64">
                <Image
                    src="/hero.jpg"
                    alt="Concert Photo"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 z-10 flex flex-col justify-between items-center p-4 text-white">
                    <div className="flex flex-col gap-2 w-fit items-center">
                        <div className="text-5xl">
                            Measure // Sergei Kofman
                        </div>

                        <div className="flex gap-2 text-xl">
                            {menuItems.map((item) => (
                                <MenuItem key={item} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};