import React, { use } from 'react';
import { Authcontext } from '../context/Authcontext';
import Useaxios from '../Hooks/Useaxios';
import Swal from 'sweetalert2';

const Addjobs = () => {
    const {user} =use(Authcontext)
    const axios =Useaxios()
    console.log(user);
    const handleSubmit =async(e)=>{
        e.preventDefault();
        const form =e.target;
        const email =form.email.value
        const title =form.title.value
        const date =form.date.value
        const image= form.image.value
        const description =form.description.value
        const categor =form.category.value
        const mini =form.mini.value
        const max =form.max.value
        const allInfo = { email, title, date, description, categor, mini, max, image }
        console.log(allInfo);
        const result = await axios.post("/jobpost",allInfo)
        if (result.data.insertedId){
            Swal.fire({
                position: "top-left",
                icon: "success",
                title: "Your Jobs successfully Added",
                showConfirmButton: false,
                timer: 1500
            });
        }
        console.log(result.data);

    }
    return (
        <div>
            <div className="min-h-screen  flex items-center justify-center p-6">

                <div className="backdrop-blur-lg bg-white/70 shadow-2xl rounded-3xl p-10 w-full max-w-3xl border border-white/40">

                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                        Add New Job
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">

                  
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Employer Email
                            </label>
                            <input
                                type="email"
                               name='email'
                               value={user?.email}
                                className="w-full px-4 py-3 text-gray-400 rounded-xl bg-gray-100 border border-gray-300 cursor-not-allowed focus:outline-none"
                            />
                        </div>

                        
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Job Title
                            </label>
                            <input
                                type="text"
                                placeholder="Enter job title"
                                name='title'
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                            />
                        </div>

                      
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Deadline
                            </label>
                            <input
                                type="date"
                                name='date'
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Job Image
                            </label>
                            <input
                                type="url"
                                name='image'
                                placeholder='Paste  image link'
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                            />
                        </div>

                   
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Description
                            </label>
                            <textarea
                                rows="4"
                                name='description'
                                placeholder="Write job description..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                            ></textarea>
                        </div>

                      
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Category
                            </label>
                            <select
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                          name='category'  >
                                <option value="">Select Category</option>
                                <option>Web Development</option>
                                <option>Graphic Design</option>
                                <option>Digital Marketing</option>
                                <option>Content Writing</option>
                            </select>
                        </div>

                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Minimum Price ($)
                                </label>
                                <input
                                    type="number"
                                    name='mini'
                                    placeholder="Min price"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Maximum Price ($)
                                </label>
                                <input
                                    type="number"
                                    name='max'
                                    placeholder="Max price"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                                />
                            </div>
                        </div>

                        {/* Add Job Button */}
                        <button
                            type="submit"
                            className="w-full cursor-pointer py-3 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transform transition duration-300 shadow-lg"
                        >
                            🚀 Add Job
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Addjobs;