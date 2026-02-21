import { useLoaderData, useNavigate } from "react-router-dom";
import { FaMoneyBillWave, FaClock, FaLayerGroup } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Jobdetails = () => {

    const data = useLoaderData();
    const navigate =useNavigate()

    const { title, deadline, mini, max, description, category, image } = data;

    const handleBack=()=>{
        navigate(-1)
    }

    return (

        <div className="max-w-6xl mx-auto mt-10 p-4 mb-10">

            <motion.div

                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .6 }}

                className="grid md:grid-cols-2 bg-white shadow-xl rounded-2xl overflow-hidden"
            >


                {/* Image Side */}

                <div className="overflow-hidden">

                    <motion.img

                        whileHover={{ scale: 1.1 }}

                        transition={{ duration: .5 }}

                        src={image}

                        className="w-full h-full object-cover"

                    />

                </div>




                <div className="p-8 space-y-6">

                        <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent hover:scale-105 transform transition duration-300">


                            {title}

                        </h1>

                        <button onClick={handleBack}><IoArrowBackCircleOutline className="text-3xl text-purple-700 font-bold hover:text-red-500 cursor-pointer animate-pulse"/></button>

                        </div>

                    <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl">

                        <FaLayerGroup className="text-purple-600 text-xl" />

                        <div>

                            <p className="text-gray-500">

                                Category

                            </p>

                            <p className="font-semibold">

                                {category}

                            </p>

                        </div>

                    </div>



                    {/* Salary */}

                    <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl">

                        <FaMoneyBillWave className="text-green-500 text-xl" />

                        <div>

                            <p className="text-gray-500">

                                Salary Range

                            </p>

                            <p className="font-semibold">

                                ${mini} - ${max}

                            </p>

                        </div>

                    </div>



                    {/* Deadline */}

                    <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl">

                        <FaClock className="text-red-500 text-xl" />

                        <div>

                            <p className="text-gray-500">

                                Deadline

                            </p>

                            <p className="font-semibold">

                                {deadline}

                            </p>

                        </div>

                    </div>



                    {/* Description */}

                    <div>

                        <h2 className="font-semibold text-lg mb-2">

                            Job Description

                        </h2>

                        <p className="text-gray-400">

                            {description}

                        </p>

                    </div>



                    {/* Button */}

                    <motion.button

                        whileHover={{ scale: 1.05 }}

                        whileTap={{ scale: .95 }}

                        className="w-full py-3  text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transform transition duration-300 shadow-lg rounded-xl font-semibold shadow-lg"

                    >

                        Apply Now 🚀

                    </motion.button>



                </div>

            </motion.div>

        </div>

    );
};

export default Jobdetails;