'use client';
import Image from 'next/image';
import { menuItems } from '@/constants/menu'
import MenuItem from './Menu'
import localFont from 'next/font/local';

const akira = localFont({
  src: [
    {
      path: '../../app/fonts/akira.otf',
      weight: '400',
      style: 'normal',
    }
  ]
})

export default function Header() {
    return (
        <>  
            <div className="relative w-full h-80">
                <div className="relative h-64">
                    <Image
                        src="/hero.jpg"
                        alt="Concert Photo"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
                <div className="absolute inset-0 z-10 flex flex-col justify-end items-center p-4">
                    <div className="flex flex-col gap-2 w-fit items-center text-center">
                        <div className={`${akira.className}`}>
                            <div className="text-2xl">
                                Sergei Kofman
                            </div>
                            <div className="text-6xl">
                                Measure
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 text-lg w-[60%] justify-between">
                            {menuItems.map((item) => (
                                <MenuItem key={item} item={item} />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};