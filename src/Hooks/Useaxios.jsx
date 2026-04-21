import axios from 'axios';
import React, { useMemo } from 'react';

const Useaxios = () => {
    const axiosInstance =useMemo(()=>{
        return axios.create({
            // baseURL: 'http://localhost:3000'
            baseURL: 'https://job-portal-server-delta-eight.vercel.app'
        })
    },[])
    return axiosInstance;
};

export default Useaxios;