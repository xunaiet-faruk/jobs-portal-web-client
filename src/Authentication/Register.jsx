import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { Authcontext } from '../context/Authcontext';
import Swal from 'sweetalert2';

const Register = () => {
      
    const { Register, google } =use(Authcontext)
    const HandleRegister =e=>{
        e.preventDefault()
        const form=e.target;
        const name =form.name.value;
        const password =form.password.value;
        const email =form.email.value;
        const photo =form.photo.value;
        const Allinfo ={name,email,password,photo}
        console.log(Allinfo);
        Register(email,password)
        .then(result => {
            if(result){
                Swal.fire({
                    title: "Your Register success",
                    icon: "success",
                    draggable: true
                });
            }
        })

    
    }

    const handleGoogle =()=>{
        google()
            .then(result => {
                if (result) {
                    Swal.fire({
                        title: "Your Register success",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center   px-4 mb-12">
                <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-lg">
                    <h2 className="text-3xl font-bold text-[#fa4c4c] text-center mb-6">
                        Create an Account
                    </h2>
                    <form onSubmit={HandleRegister}>

                        {/* Name Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Enter your full name"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fa4c4c] transition duration-300"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                name='email'
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fa4c4c] transition duration-300"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                name='password'
                                placeholder="Create a password"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fa4c4c] transition duration-300"
                            />
                        </div>

                        {/* Photo URL Input */}
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2">Profile Photo URL</label>
                            <input
                                type="text"
                                name='photo'
                                placeholder="Enter your profile image URL"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fa4c4c] transition duration-300"
                            />
                        </div>

                        {/* Register Button */}
                        <button type='submit' className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transform transition duration-300 shadow-lg text-white font-bold py-3 rounded-xl hover:bg-red-600 transition duration-300 mb-4">
                            Register
                        </button>

                        {/* OR Divider */}
                        <div className="flex items-center my-4">
                            <hr className="flex-1 border-gray-300" />
                            <span className="mx-2 text-gray-400">OR</span>
                            <hr className="flex-1 border-gray-300" />
                        </div>

                        {/* Google Sign-Up */}
                        <button type='button' onClick={handleGoogle} className="w-full cursor-pointer flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl hover:shadow-lg transition duration-300">
                            <FcGoogle size={24} /> Continue with Google
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-gray-500 mt-6">
                        Already have an account?{" "}
                        <Link to={"/login"} className="text-[#71b6af] font-semibold cursor-pointer">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        

        </div>
    );
};

export default Register;