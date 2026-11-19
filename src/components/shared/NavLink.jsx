'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathName = usePathname();
    //console.log(pathName, "pathname.....")
    const isActive = pathName === href;

    return (
        <Link href={href} className={isActive ? "text-emerald-500 font-medium": "text-gray-700 font-medium"}>{children}</Link>
    );
};

export default NavLink;