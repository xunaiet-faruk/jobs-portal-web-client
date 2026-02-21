import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const JobsCard = ({ jobs, selectCategory }) => {
    const navigate =useNavigate()
    const filterTabs = selectCategory === "All"
        ? jobs
        : jobs.filter(job => job.categor === selectCategory);
        
        
        const handleDetails =(id) =>{
            navigate(`/jobdetails/${id}`)
        }

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-12 gap-4">
          {
                filterTabs.map(job => 
                    <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="relative group rounded-2xl overflow-hidden cursor-pointer"
                    >
                        {/* Subtle Glass Shadow */}
                        <div className="relative bg-gray-50  rounded-2xl p-6 shadow-2xl hover:shadow-xl transition-shadow duration-300 border-t border-b border-red-500">

                            {/* Job Header */}
                            <div className="flex justify-between items-center mb-3">
                                <h2 className="text-lg md:text-xl font-semibold ">
                                    {job?.title }
                                </h2>
                                <span
                                    className={`text-sm md:text-sm px-2  rounded-full font-medium text-white
                                 ${job?.categor === "Web Development"
                                        ? "bg-gradient-to-r from-[#ae3232] to-[#e66e2d] "
                                            : job?.categor === "Digital Marketing"
                                            ? "bg-gradient-to-r from-[#25ba9f] to-[#39e7c7]"
                                            : job?.categor === "Graphic Design"
                                                ? "bg-gradient-to-r from-[#fa4c4c]  to-purple-500"
                                                    : "bg-gray-400"
                                        }`}
                                >
                                    {job?.categor }
                                </span>
                            </div>

                            {/* Deadline and Price */}
                            <div className="flex justify-between items-center text-black text-sm mb-3">
                                <p className="flex items-center gap-1">
                                    <FaClock className="text-[#fa4c4c] " /> {job?.deadline }
                                </p>
                                <p className="flex items-center gap-1 text-[#fa4c4c] font-semibold">
                                    <FaDollarSign /> {job?.mini } - {job?.max }
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-gray-700  mb-5 line-clamp-3">
                                {job?.description}
                            </p>

                            {/* Bid Now Button */}
                            <motion.button onClick={() =>handleDetails(job._id)}
                                whileHover={{ scale: 1.05 }}
                                className="w-full py-2 rounded-xl  font-semibold  border-b-2 hover:bg-purple-500 hover:text-white border-purple-500  transition-all duration-300"
                            >
                                Bid Now
                            </motion.button>
                        </div>
                    </motion.div>)
          }
        </div>
    );
};

export default JobsCard;