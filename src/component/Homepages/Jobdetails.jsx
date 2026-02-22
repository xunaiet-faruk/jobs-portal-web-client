import {  useNavigate, useParams } from "react-router-dom";
import { FaMoneyBillWave, FaClock, FaLayerGroup } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Useaxios from "../../Hooks/Useaxios";
import { useEffect, useState } from "react";
import Bidrequest from "../../pages/Bidrequest";

const Jobdetails = () => {

    const [job, setJob] = useState(null)
    const [showForm, setShowForm] = useState(false);
    const {id} = useParams()
    const navigate =useNavigate()

    const axios =Useaxios()

    useEffect(()=>{

        const fetthJob =async() =>{
            const res = await axios(`/jobpost/${id}`)
            setJob(res.data)
            
        }
        fetthJob();

    },[axios,id]);

    if (!job) return <p className="text-center mt-10">Loading...</p>;

 

    const handleBack=()=>{
        navigate(-1)
    }

    const handleBook = () => {
        setShowForm(true);
    };

    return (

        <div className="max-w-6xl mx-auto mt-10 p-4 mb-10">

            
                 <motion.div
                    key={job._id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}

                    className="grid md:grid-cols-2 bg-white shadow-xl rounded-2xl overflow-hidden"
                >



                    <div className="overflow-hidden">

                        <motion.img

                            whileHover={{ scale: 1.1 }}

                            transition={{ duration: .5 }}

                            src={job.image}

                            className="w-full h-full object-cover"

                        />

                    </div>




                    <div className="p-8 space-y-6">

                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent hover:scale-105 transform transition duration-300">


                                {job.title}

                            </h1>

                            <button onClick={handleBack}><IoArrowBackCircleOutline className="text-3xl text-purple-700 font-bold hover:text-red-500 cursor-pointer animate-pulse" /></button>

                        </div>

                        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl">

                            <FaLayerGroup className="text-purple-600 text-xl" />

                            <div>

                                <p className="text-gray-500">

                                    Category

                                </p>

                                <p className="font-semibold">

                                    {job.categor}

                                </p>

                            </div>

                        </div>



                

                        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl">

                            <FaMoneyBillWave className="text-green-500 text-xl" />

                            <div>

                                <p className="text-gray-500">

                                    Salary Range

                                </p>

                                <p className="font-semibold">

                                    ${job.mini} - ${job.max}

                                </p>

                            </div>

                        </div>




                        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl">

                            <FaClock className="text-red-500 text-xl" />

                            <div>

                                <p className="text-gray-500">

                                    Deadline

                                </p>

                                <p className="font-semibold">

                                    {job.deadline}

                                </p>

                            </div>

                        </div>




                        <div>

                            <h2 className="font-semibold text-lg mb-2">

                                Job Description

                            </h2>

                            <p className="text-gray-400">

                                {job.description}

                            </p>

                        </div>



              
                    <motion.button
                        onClick={handleBook}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: .95 }}
                        className="w-full py-3 text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl"
                    >
                        Apply Now 🚀
                    </motion.button>

                    {
                        showForm && <Bidrequest job={job} closeModal={() => setShowForm(false)} />
                    }



                    </div>

                </motion.div>
            

        </div>

    );
};

export default Jobdetails;