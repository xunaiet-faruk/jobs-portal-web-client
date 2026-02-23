import React, { use } from 'react';
import { Authcontext } from '../context/Authcontext';
import { Navigate, useNavigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    const { user, loading } =use(Authcontext)

    if(loading){
       return <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-infinity text-[#fa4c4c] loading-xl w-[50px]"></span>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
   
};

export default Privateroute;