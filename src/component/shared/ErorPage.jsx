import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {

    // Optional: Auto redirect after 5 sec
    useEffect(() => {
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden px-6">

     
            <div className="absolute top-20 left-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-52 h-52 bg-pink-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>

            <div className="max-w-xl text-center z-10">

         
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
                >
                    404
                </motion.h1>

            
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-semibold text-gray-800 mt-6"
                >
                    Oops! Page Not Found
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-500 mt-3 mb-10"
                >
                    The page you are looking for might have been removed or is temporarily unavailable.
                </motion.p>

           
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <Link to="/">
                        <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold shadow-xl 
            bg-gradient-to-r from-purple-600 to-pink-500 
            hover:scale-105 transform transition duration-300">
                            <FaHome />
                            Back To Home
                        </button>
                    </Link>
                </motion.div>

            </div>
        </div>
    );
};

export default ErrorPage;