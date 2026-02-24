import React from 'react';
import { motion } from 'framer-motion';

const OportunitySection = () => {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20">
            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-5xl font text-center pb-16 leading-tight"
            >
                Ready to Find Your{' '}
                <span className="  text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    Dream
                </span>{' '}
                Job?
            </motion.h1>

            {/* Flex Section */}
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-10">
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 relative inline-block">
                        Take the next step in your career journey.
                        <span className="absolute left-0 -bottom-2 w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></span>
                    </h2>

                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                        Explore opportunities that match your skills and passions, and land the job you've always wanted
                        with <span className="font-semibold text-purple-600">JobsPortal</span>. Unlock your potential
                        and build your dream career today!
                    </p>


                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        Explore Jobs
                    </motion.button>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <motion.img
                        src="/hero-image.png"
                        alt="Job Opportunities"
                        className="w-full max-w-md md:max-w-lg rounded-xl  hover:scale-105 transition-transform duration-500"
                        whileHover={{ scale: 1.05 }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default OportunitySection;