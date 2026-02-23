import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Typical from 'react-typical';

const Banner = () => {
    return (
        <div className="h-screen text-black flex items-center justify-center -mt-12">
            <div className="text-center px-4">
                <h1 className="text-5xl md:text-6xl font font-bold">
                    Your Marketplace for Freelance<br /> <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500'>Opportunities </span> 
               
                    <Typical
                        steps={['Find the Perfect Job', 2000, 'Hire the Best Talent', 2000]}
                        loop={Infinity}
                        wrapper="span"
                    />
               
                </h1>
               
                <p className="mt-4 text-md md:text-md font-poppins text-gray-400">Explore  thousands of jobs across Web Development, Digital Marketing, and Graphic Design.<br/> Post your projects or bid on jobs today – all in one place!                </p>
               <div className="flex justify-center mt-8">
                <div className="flex w-full max-w-2xl">
                    <input
                        type="text"
                        placeholder="Search jobs, categories or skills..."
                            className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fa4c4c] text-gray-700"
                    />
                        <button className="bg-[#fa4c4c] hover:bg-[#71b6af] px-4 rounded-r-lg flex items-center justify-center">
                        <FiSearch className="text-white text-xl" />
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;
