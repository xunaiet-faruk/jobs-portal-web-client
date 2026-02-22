import React, { useEffect, useState } from 'react';
import Useaxios from '../Hooks/Useaxios';

const MyBids = () => {

    const axios = Useaxios();
    const [bidrequests, setBidrequest] = useState([]);

    useEffect(() => {

        const Requestdata = async () => {
            const fetchdata = await axios.get("/bidpost");
            setBidrequest(fetchdata.data);
        }

        Requestdata()

    }, [axios])

    return (

        <div className="max-w-6xl mx-auto mt-10 mb-10">

            <h1 className="text-3xl font-bold text-center mb-8">
                My Bids
            </h1>

            <div className="overflow-x-auto">

                <table className="table w-full border">

                    <thead className=" bg-gradient-to-r  from-purple-600 to-pink-500 text-white">

                        <tr>
                            <th>#</th>
                            <th>Bid Price</th>
                            <th>Deadline</th>
                            <th>Email</th>
                            <th>Buyer Email</th>
                            <th>Status</th>
                        </tr>

                    </thead>

                    <tbody>

                        {bidrequests.map((bid, index) => (

                            <tr key={bid._id} className="hover:bg-gray-100">

                                <td>{index + 1}</td>

                                <td>${bid.number}</td>

                                <td>{bid.date}</td>

                                <td>{bid.email}</td>

                                <td className='text-gray-400'>{bid.buyer}</td>

                                <td>
                                    {bid.status === "in progress" ? (
                                        <button className="btn btn-sm bg-green-500 text-white">
                                            Complete
                                        </button>
                                    ) : (
                                        <span className={`px-2 py-1 rounded ${bid.status === "pending" ? "bg-yellow-400 text-black" :
                                                bid.status === "complete" ? "bg-gray-400 text-white" :
                                                    " bg-gradient-to-r cursor-pointer from-purple-600 to-pink-500 text-white"
                                            }`}>
                                            {bid.status ? bid.status : "Pending"}
                                        </span>
                                    )}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );
};

export default MyBids;