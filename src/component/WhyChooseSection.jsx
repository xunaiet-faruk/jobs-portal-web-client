import React from "react";
import { motion } from "framer-motion";
import { FaRegHandshake, FaBriefcase, FaChartLine, FaRocket } from "react-icons/fa";

const WhyChooseSection = () => {

    const features = [
        {
            icon: <FaRegHandshake className="text-purple-600 text-3xl md:text-4xl" />,
            title: "Trusted Employers",
            description:
                "We partner with verified companies to ensure you apply to genuine job opportunities.",
        },

        {
            icon: <FaBriefcase className="text-green-600 text-3xl md:text-4xl" />,
            title: "Wide Job Selection",
            description:
                "Thousands of jobs across industries and locations. Find the one that suits your skills.",
        },

        {
            icon: <FaChartLine className="text-yellow-500 text-3xl md:text-4xl" />,
            title: "Career Growth",
            description:
                "Opportunities with mentorship and learning to boost your career to the next level.",
        },

        {
            icon: <FaRocket className="text-pink-500 text-3xl md:text-4xl" />,
            title: "Fast & Easy Apply",
            description:
                "Apply to jobs quickly and efficiently. Save your time and get faster responses from employers.",
        },

    ];


    return (

        <div className="bg-white py-16 md:py-20 px-4 md:px-8 lg:px-16">


            {/* Title Animation */}

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl font text-center pb-12 text-gray-800"
            >

                Why Choose

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">

                    JobsPortal

                </span>

                ?

            </motion.h2>



            {/* Grid */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

                {features.map((feature, index) => (

                    <motion.div

                        key={index}

                        initial={{ opacity: 0, y: 40 }}

                        whileInView={{ opacity: 1, y: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: 0.6, delay: index * 0.15 }}



                        whileHover={{
                            y: -8,
                            scale: 1.03
                        }}



                        className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300 cursor-pointer"

                    >


                        {/* Icon Animation */}

                        <motion.div

                            animate={{ y: [0, -5, 0] }}

                            transition={{
                                duration: 2,
                                repeat: Infinity
                            }}

                            className="mb-4"

                        >

                            {feature.icon}

                        </motion.div>



                        <h3 className="text-gray-800 text-lg md:text-xl lg:text-2xl font-bold mb-2">

                            {feature.title}

                        </h3>



                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">

                            {feature.description}

                        </p>


                    </motion.div>

                ))}

            </div>


        </div>

    );

};

export default WhyChooseSection;