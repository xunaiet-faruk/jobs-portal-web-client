import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Updatejob = ({ isOpen, onClose, jobData, onUpdate }) => {
    const [formData, setFormData] = useState({
        email: "",
        title: "",
        date: "",
        description: "",
        categor: "",
        mini: "",
        max: "",
    });

    useEffect(() => {
        if (jobData) setFormData(jobData);
    }, [jobData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData); // pass data to parent
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0  flex items-center justify-center z-50 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white/90 dark:bg-gray-400/20  backdrop-blur-md rounded-2xl w-full max-w-lg p-6 relative shadow-2xl border "
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 font-bold text-2xl cursor-pointer"
                        >
                            &times;
                        </button>

                        <h2 className="text-2xl font-bold mb-4 text-center text-[#fa4c4c] ">
                            Update Job
                        </h2>

                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            {/* Email (readonly) */}
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                readOnly
                                className="border-2 border-white rounded-lg p-2 bg-gray-300 text-gray-700"
                            />

                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Job Title"
                                className="border-2 border-white rounded-lg p-2 bg-gray-300  text-gray-700"
                            />

                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="border-2 border-white rounded-lg p-2 bg-gray-300  text-gray-700"
                            />

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Job Description"
                                className="border-2 border-white rounded-lg p-2 bg-gray-300  text-gray-700"
                            />

                            <input
                                type="text"
                                name="categor"
                                value={formData.categor}
                                onChange={handleChange}
                                placeholder="Category"
                                className="border-2 border-white rounded-lg p-2 bg-gray-300  text-gray-700"
                            />

                            <div className="flex gap-3">
                                <input
                                    type="number"
                                    name="mini"
                                    value={formData.mini}
                                    onChange={handleChange}
                                    placeholder="Minimum Price"
                                    className="border-2 border-white rounded-lg p-2 bg-gray-300  text-gray-700"
                                />
                                <input
                                    type="number"
                                    name="max"
                                    value={formData.max}
                                    onChange={handleChange}
                                    placeholder="Maximum Price"
                                    className="border-2 border-white rounded-lg p-2 bg-gray-300  text-gray-7001"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-lg mt-2 hover:scale-105 transition transform duration-300"
                            >
                                Update Job
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Updatejob;