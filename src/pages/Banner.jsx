import React from "react";
import { FiSearch } from "react-icons/fi";
import Typical from "react-typical";

const Banner = () => {
    return (
        <div className="bg-white text-black flex items-center mb-16 justify-center py-16 md:py-20 px-4 md:px-8 lg:px-16">

            <div className="text-center max-w-4xl w-full">

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font leading-tight">

                    Your Marketplace for Freelance
                    <br />

                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                        Opportunities
                    </span>

                    {/* FIXED HEIGHT ANIMATION */}
                    <div className="h-[60px] md:h-[70px] flex items-center justify-center">

                        <Typical
                            steps={[
                                "Find the Perfect Job",
                                2000,
                                "Hire the Best Talent",
                                2000
                            ]}
                            loop={Infinity}
                            wrapper="span"
                        />

                    </div>

                </h1>

                {/* Subheading */}
                <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">

                    Explore thousands of jobs across Web Development,
                    Digital Marketing, and Graphic Design.

                    <br className="hidden md:block" />

                    Post your projects or bid on jobs today – all in one place!

                </p>


                {/* Search Bar */}
                <div className="flex justify-center mt-8">

                    <div className="flex flex-col sm:flex-row w-full max-w-2xl gap-2 sm:gap-0">

                        <input
                            type="text"
                            placeholder="Search jobs, categories or skills..."
                            className="flex-grow px-4 py-3 rounded-lg sm:rounded-r-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fa4c4c]"
                        />

                        <button className="sm:rounded-l-none rounded-lg sm:rounded-r-lg text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition duration-300 flex items-center justify-center px-6 py-3">

                            <FiSearch className="text-xl" />

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Banner;