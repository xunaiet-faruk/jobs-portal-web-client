import React, { useEffect, useState, useContext } from "react";
import Useaxios from "../Hooks/Useaxios";
import { Authcontext } from "../context/Authcontext";
import Swal from "sweetalert2";
import { AiOutlineCheckCircle } from "react-icons/ai"; // ✅ check icon

const MyBids = () => {
    const axios = Useaxios();
    const { user } = useContext(Authcontext);
    const [bids, setBids] = useState([]);

    useEffect(() => {
        if (!user?.email) return;
        const fetchBids = async () => {
            const res = await axios.get(`/bidpost?email=${user.email}`); // only current user's bids
            setBids(res.data);
        };
        fetchBids();
    }, [axios, user?.email]);

    const handleComplete = async (id) => {
        const res = await axios.put(`/bidpost/complete/${id}`);
        if (res.data.modifiedCount) {
            Swal.fire("Success", "Bid marked as complete!", "success");
            setBids((prev) =>
                prev.map((b) => (b._id === id ? { ...b, status: "complete" } : b))
            );
        }
    };

    return (
        <div className="max-w-6xl mx-auto mt-10 mb-20">
            <h1 className="text-3xl font-bold text-center mb-8">My  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Bids</span></h1>
            <div className="overflow-x-auto">
                <table className="table w-full border">
                    <thead className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                        <tr>
                            <th>#</th>
                            <th>Bid Price</th>
                            <th>Deadline</th>
                            <th>Email</th>
                            <th>Buyer Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bids.map((bid, i) => (
                            <tr key={bid._id} className="hover:bg-gray-100">
                                <td>{i + 1}</td>
                                <td>${bid.number}</td>
                                <td>{bid.date}</td>
                                <td>{bid.email}</td>
                                <td>{bid.buyer}</td>
                                <td>
                                    <span
                                        className={`px-2 py-1 rounded ${bid.status === "pending"
                                                ? "bg-yellow-400 text-black"
                                                : bid.status === "in progress"
                                                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                                                    : bid.status === "complete"
                                                        ? "bg-gray-400 text-white"
                                                        : "bg-[#fa4c4c] text-white"
                                            }`}
                                    >
                                        {bid.status}
                                    </span>
                                </td>
                                <td className="text-center">
                                    {bid.status === "in progress" && (
                                        <AiOutlineCheckCircle
                                            onClick={() => handleComplete(bid._id)}
                                            className="text-green-500 rounded-full text-3xl cursor-pointer hover:scale-110 transform transition duration-200"
                                            title="Mark Complete"
                                        />
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