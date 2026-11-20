import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h3 className='text-emerald-500 text-4xl font-bold'>This page is not Fond</h3>
            <Link href={"/"} className='mt-4 btn bg-emerald-500 text-white font-medium hover:bg-emerald-400'>
                Go Home
            </Link>
        </div>
    );
};

export default NotFoundPage;