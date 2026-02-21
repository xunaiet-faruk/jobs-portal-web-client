import React, { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Useaxios from "../Hooks/Useaxios";
import { Authcontext } from "../context/Authcontext";
import Updatejob from "./Updatejob";

const Myjobs = () => {
    const axios = Useaxios();
    const [jobs, setJobs] = useState([]);
    const {user,loading} =use(Authcontext)
    const [fetching, setFetching] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    useEffect(() => {
        const MyjobInfo = async () => {
            if (!user?.email) return;
            setFetching(true);
       
            try {
                const response = await axios.get(`/jobpost?email=${user?.email}`);
                setJobs(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setFetching(false); 
            }
        };
        MyjobInfo();
    }, [axios,user?.email]);

    if(loading || fetching){
       return (
           <div className="min-h-screen flex items-center justify-center">
               <span className="loading loading-infinity text-[#fa4c4c] loading-xl w-[50px]"></span>
           </div>
       )
    }


    const handleUpdateClick = (job) => {
        setSelectedJob(job);
        setModalOpen(true);
    };

    return (
        <div className="min-h-screen backdrop-blur-lg bg-white/70 py-16 px-4">

            <div className="text-center mb-14">
                <h1 className="text-4xl font-bold">
                    My Posted <span className="text-[#fa4c4c]">Jobs
                       
                    </span>
                </h1>
                <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
                    Here you can manage all the jobs you have posted.
                    You can update, delete, or review applicants for each position.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
                {jobs.map((job) => (
                    <motion.div
                        key={job._id}
                        whileHover={{ scale: 1.04 }}
                        className="relative group rounded-2xl p-[3px] overflow-hidden"
                    >
                        <div className="absolute inset-0 rounded-2xl 
              bg-gradient-to-r from-[#fa4c4c] via-pink-500 to-[#fa4c4c] 
              animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100">
                        </div>

                    
                        <div className="relative bg-white rounded-2xl p-6 shadow-xl group-hover:shadow-2xl transition duration-300">

                     
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold">{job.title}</h2>
                                <span className="border-b border-[#fa4c4c] font-semibold text-xs px-3 py-1 rounded-full">
                                    {job.category}
                                </span>
                            </div>

                            <p className="text-sm text-gray-500 mt-2">
                                Deadline: <span className="text-red-500 font-semibold">{job.date}</span>
                            </p>

                          
                            <p className="mt-3 text-gray-600">{job.description}</p>

                        
                            <p className="mt-4 font-semibold text-green-600">
                                ${job.mini} - ${job.max}
                            </p>

                        
                            <div className="mt-6 flex gap-3">
                                <button
                                    className="flex-1 flex items-center justify-center gap-2 border-b-2 border-purple-500 py-2 rounded-lg hover:bg-purple-600 cursor-pointer hover:text-white transition duration-300"
                                    onClick={() => handleUpdateClick(job)}
                                >
                                    <FaEdit /> Update
                                </button>

                                <button className="flex-1 flex items-center justify-center gap-2 border-b border-[#f53c3c] hover:bg-[#f53c3c]  hover:text-white cursor-pointer py-2 rounded-lg hover:bg-red-600 transition duration-300">
                                    <FaTrash /> Delete
                                </button>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>

            <Updatejob
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                jobData={selectedJob}
                onUpdate={(data) => console.log("Updated job data:", data)}
            />
        </div>
    );
};

export default Myjobs;