import React from 'react';

const CategoriesJobs = () => {
    return (
        <div>
            <div className=''>
                <h1 className="text-5xl md:text-6xl text-center font font-bold">
                    Find Your <span className='text-[#fa4c4c]'>Next</span>  Opportunity<br /> 
                </h1>

                <div className='mt-12 flex justify-center items-center gap-32 mb-12'>

                    <button className='border-b-2 border-[#fa4c4c] rounded-xl px-5 hover:bg-[#fa4c4c] hover:text-white py-1 font hover:rounded-full cursor-pointer'>Web Development</button>
                    <button className='border-b-2 border-[#fa4c4c] rounded-xl px-5 hover:bg-[#fa4c4c] hover:text-white py-1 font hover:rounded-full cursor-pointer'>Digital Marketing</button>
                    <button className='border-b-2 border-[#fa4c4c] rounded-xl px-5 hover:bg-[#fa4c4c] hover:text-white py-1 font hover:rounded-full cursor-pointer'>Graphics Design</button>

                </div>
            </div>
        </div>
    );
};

export default CategoriesJobs;