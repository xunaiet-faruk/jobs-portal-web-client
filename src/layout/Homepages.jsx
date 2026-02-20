import React, { useEffect, useState } from 'react';
import Banner from '../pages/Banner';
import CategoriesJobs from '../component/CategoriesJobs';
import JobsCard from '../component/Homepages/JobsCard';
import Useaxios from '../Hooks/Useaxios';


const Homepages = () => {
    const [selectCategory, setSelectcategory] = useState("All")
    const [jobsData, setJobsData] = useState([]);
    const categories = ["All", "Web Development", "Digital Marketing", "Graphics Design"];
    const axios =Useaxios()
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await axios.get('/category');
                console.log(res.data);
                setJobsData(res.data);
            } catch (err) {
                console.log("Error fetching jobs:", err);
            }
        };
        fetchJobs();
    }, []);
    return (
        <div>
            <Banner />
            <div className='mt-12 flex justify-center items-center gap-8 mb-12'>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectcategory(cat)}
                        className={`
                            border-b-2 border-[#fa4c4c] rounded-xl px-5 py-1 font cursor-pointer transition-all duration-300
                              ${selectCategory === cat
                                ? "bg-[#fa4c4c] text-white rounded-full"
                                : "hover:bg-[#fa4c4c] hover:text-white"}  
                             `}
                         >
                        {cat}
                    </button>
                ))}
            </div>
            <JobsCard jobs={jobsData} selectCategory={selectCategory} />
        </div>
    );
};

export default Homepages;