import { motion } from "framer-motion";
import { use } from "react";
import { Authcontext } from "../context/Authcontext";
import Useaxios from "../Hooks/Useaxios";
import Swal from "sweetalert2";

const Bidrequest = ({ job, closeModal }) => {
    const {user} =use(Authcontext)
    const axios =Useaxios()

    const handleForm = async (e) => {
        e.preventDefault()
        const form = e.target;
        const number = form.number.value;
        const date = form.date.value;
        const email = form.email.value; 
        const buyer = form.buyer.value; 

        const Alldata = {
            number,
            date,
            email,          
            buyer,          
            jobOwnerEmail: job.email, 
            jobId: job._id,            
            jobTitle: job.title         
        }

        const result = await axios.post('/bidpost', Alldata)
        if (result.data.insertedId) {
            Swal.fire({
                position: "top-left",
                icon: "success",
                title: "Your Bid successfully Added",
                showConfirmButton: false,
                timer: 1500
            });
            closeModal();
            form.reset()
        }
    }
    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: .3 }}
                className="bg-white w-[500px] p-6 rounded-2xl shadow-xl"
            >

                <h2 className="text-2xl font-bold mb-5 text-center">
                    Place Your Bid
                </h2>


                <form className="space-y-4" onSubmit={handleForm}>


              

                    <input
                        type="number"
                        name="number"
                        placeholder="Your Bid Price"
                        className="w-full p-3 border rounded-xl"
                    />


               

                    <input
                        type="date"
                        className="w-full p-3 border rounded-xl"
                        name="date"
                    />


                 
                    <input
                        type="email"
                        value={user?.email}
                        readOnly
                        name="email"
                        className="w-full p-3 border rounded-xl bg-gray-200"
                    />



                    <input
                        type="email"
                        value={job.email}
                        readOnly
                        name="buyer"
                        className="w-full p-3 border rounded-xl bg-gray-200"
                    />


                  

                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r cursor-pointer from-purple-600 to-pink-500 text-white rounded-xl font-semibold"
                    >
                        Bid On Project 🚀
                    </button>


             

                    <button
                        type="button"
                        onClick={closeModal}
                        className="w-full py-2 bg-gray-400 text-white rounded-xl hover:bg-red-400 cursor-pointer"
                    >
                        Close
                    </button>


                </form>

            </motion.div>

        </div>

    );

};

export default Bidrequest;