import React, { useEffect, useState } from 'react';
import Banner from '../pages/Banner';
import CategoriesJobs from '../component/CategoriesJobs';
import JobsCard from '../component/Homepages/JobsCard';
import Useaxios from '../Hooks/Useaxios';
import OportunitySection from '../component/OportunitySection';
import WhyChooseSection from '../component/WhyChooseSection';
import { motion } from "framer-motion";

const Homepages = () => {
    const [selectCategory, setSelectcategory] = useState("All")
    const [jobsData, setJobsData] = useState([]);
    const categories = ["All", "Web Development", "Digital Marketing", "Graphic Design"];
    const axios = Useaxios()
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await axios.get('/jobpost');
                console.log(res.data);
                setJobsData(res.data);
            } catch (err) {
                console.log("Error fetching jobs:", err);
            }
        };
        fetchJobs();
    }, [axios]);
    return (
        <div>
            <Banner />
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font text-center  text-gray-800"
            >
                Browse Jobs By  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Categories</span>?
            </motion.h2>





            <div className='mt-12 flex justify-center items-center gap-8 mb-12'>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectcategory(cat)}
                        className={`
                            border-b-2 border-purple-600 rounded-xl px-5 py-1 font cursor-pointer transition-all duration-300
                              ${selectCategory === cat
                            ? "text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transform transition duration-300 shadow-lg rounded-full"
                                : "hover:bg-pink-500 hover:text-white"}  
                             `}
                    >
                        {cat}
                    </button>
                ))}
            </div>





            <JobsCard jobs={jobsData} selectCategory={selectCategory} />

            <OportunitySection/>
            <WhyChooseSection/>
        </div>
    );
};

export default Homepages;