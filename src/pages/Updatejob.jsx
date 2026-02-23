import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Updatejob = ({ isOpen, onClose, jobData, onUpdate }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const updatedData = {
            _id: jobData._id,
            email: form.email.value,
            title: form.title.value,
            date: form.date.value,
            description: form.description.value,
            categor: form.categor.value,
            mini: form.mini.value,
            max: form.max.value,
        };

        onUpdate(updatedData);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white rounded-2xl w-full max-w-lg p-6 relative shadow-2xl"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                    >

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-4xl text-red-600 cursor-pointer"
                        >
                            ×
                        </button>

                        <h2 className="text-2xl font-bold mb-4 text-center">
                            Update Job
                        </h2>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                            <input
                                type="email"
                                name="email"
                                defaultValue={jobData?.email}
                                readOnly
                                className="border p-2 rounded"
                            />

                            <input
                                type="text"
                                name="title"
                                defaultValue={jobData?.title}
                                placeholder="Title"
                                className="border p-2 rounded"
                            />

                            <input
                                type="date"
                                name="date"
                                defaultValue={jobData?.date}
                                className="border p-2 rounded"
                            />

                            <textarea
                                name="description"
                                defaultValue={jobData?.description}
                                placeholder="Description"
                                className="border p-2 rounded"
                            />

                            <input
                                type="text"
                                name="categor"
                                defaultValue={jobData?.categor}
                                placeholder="Category"
                                className="border p-2 rounded"
                            />

                            <div className="flex gap-2">

                                <input
                                    type="number"
                                    name="mini"
                                    defaultValue={jobData?.mini}
                                    placeholder="Min Price"
                                    className="border p-2 rounded w-full"
                                />

                                <input
                                    type="number"
                                    name="max"
                                    defaultValue={jobData?.max}
                                    placeholder="Max Price"
                                    className="border p-2 rounded w-full"
                                />

                            </div>

                            <button
                                className="text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transform transition duration-300 shadow-lg py-2 rounded-xl"
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