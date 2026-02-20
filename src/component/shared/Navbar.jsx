import React from 'react';
import { Link,  NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = (
        <>
            <NavLink className="mx-4" to="/">Home</NavLink>
            <NavLink className="mx-4" to="/add-job">Add Job</NavLink>
            <NavLink className="mx-4" to="/myjobs">My Jobs</NavLink>
            <NavLink className="mx-4" to="/my-bids">My Bids</NavLink>
            <NavLink className="mx-4" to="/request">Bid Requests</NavLink>
        </>
    );
    return (
        <div>
            <div className="navbar bg-base-100  ">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
                    >
                        <img className="w-24" src="/Logo.png" alt="logo" />
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="border text-white px-6 py-1 rounded-2xl font-semibold bg-[#fa4c4c]" to={"/login"}>
                    Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;