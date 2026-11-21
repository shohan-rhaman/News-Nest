import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
           <div className='flex items-center gap-4 btn border-blue-200 text-blue-500 mt-4'>
            <FaGoogle />
            Login With Google
           </div> 
           <div className='flex items-center gap-4 btn border-gray-300 text-black-500 mt-2'>
            <FaGithub />
            Login With Github
           </div> 

        </div>
    );
};

export default RightSideBar;