import React, { useEffect, useState, useContext } from "react";
import Useaxios from "../Hooks/Useaxios";
import { Authcontext } from "../context/Authcontext";
import Swal from "sweetalert2";

const OwnerAction = () => {
    const axios = Useaxios();
    const { user } = useContext(Authcontext);
    const [bids, setBids] = useState([]);

    useEffect(() => {
        if (!user?.email) return;
        const fetchBids = async () => {
            const res = await axios.get(`/bidpost?buyer=${user.email}`); // all bids for this owner's jobs
            setBids(res.data);
        };
        fetchBids();
    }, [axios, user?.email]);

    const handleAccept = async (id) => {
        const res = await axios.put(`/bidpost/accept/${id}`);
        if (res.data.modifiedCount) {
            Swal.fire("Accepted", "Bid is now In Progress", "success");
            setBids((prev) =>
                prev.map((b) => (b._id === id ? { ...b, status: "in progress" } : b))
            );
        }
    };

    const handleReject = async (id) => {
        const res = await axios.put(`/bidpost/reject/${id}`);
        if (res.data.modifiedCount) {
            Swal.fire("Rejected", "Bid has been rejected", "error");
            setBids((prev) =>
                prev.map((b) => (b._id === id ? { ...b, status: "rejected" } : b))
            );
        }
    };

    return (
        <div className="max-w-6xl mx-auto mt-10 mb-10">
            <h1 className="text-3xl font-bold text-center mb-8">Bid Requests</h1>

            <div className="overflow-x-auto">
                <table className="table w-full border border-gray-200">
                    <thead className="bg-purple-600 text-white">
                        <tr>
                            <th>#</th>
                            <th>Job Title</th>
                            <th>Bid Price</th>
                            <th>Deadline</th>
                            <th>Bidder Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bids.map((bid, index) => (
                            <tr key={bid._id} className="hover:bg-gray-100">
                                <td>{index + 1}</td>
                                <td>{bid.title}</td>
                                <td>${bid.number}</td>
                                <td>{bid.date}</td>
                                <td>{bid.email}</td>
                                <td>
                                    {bid.status === "in progress" ? (
                                        <span className="px-2 py-1 rounded bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                                            In Progress
                                        </span>
                                    ) : bid.status === "pending" ? (
                                        <span className="px-2 py-1 rounded bg-yellow-400 text-black">
                                            Pending
                                        </span>
                                    ) : bid.status === "complete" ? (
                                        <span className="px-2 py-1 rounded bg-gray-400 text-white">
                                            Completed
                                        </span>
                                    ) : (
                                        <span className="px-2 py-1 rounded bg-[#fa4c4c] text-white">
                                            Rejected
                                        </span>
                                    )}
                                </td>
                                <td className="flex gap-2">
                                    {bid.status === "pending" && (
                                        <>
                                            <button
                                                onClick={() => handleAccept(bid._id)}
                                                className="px-3 py-1 rounded bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                                            >
                                                Accept
                                            </button>
                                            <button
                                                onClick={() => handleReject(bid._id)}
                                                className="px-3 py-1 rounded bg-[#fa4c4c] text-white"
                                            >
                                                Reject
                                            </button>
                                        </>
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

export default OwnerAction;