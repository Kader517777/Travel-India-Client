import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { userContext } from "../../Provider/AuthContext";
import axios from "axios";

const SignUp = () => {

    const { createEmailPasswordUser, user, jwtCreat } = useContext(userContext);
    console.log(user);
    const handleRegitration = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const country = e.target.country.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        if (password < 6) {
            return toast.error('At least 6 characters');
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error('At least 1 capital letter');
        }
        else if (!/[!S#$%&?]/.test(password)) {
            return toast.error('At least 1 special character');
        }
        else if (!/[0-9]/.test(password)) {
            return toast.error('At least 1 numeric character');
        }

        createEmailPasswordUser(email, password)
            .then((user) => {

                toast.success('Successfully Login!!');
                e.target.reset();
            })
        e.target.reset();
    }
    return (
        <div className="bg-[#FFFFFF]">
            <div className="hero  min-h-screen bg-[#DEDDDE]">
                <div className="hero-content  w-full h-full">

                    <div className="card flex-col lg:flex-row rounded-l-none shadow-2xl bg-[#F5F4F6] border-[3px] border-[#FFFDFF]">
                        <div className="text-center lg:text-left">
                            <img src="https://i.ibb.co/z7xZyZb/timenew.png" className=" h-full " alt="" />
                        </div>
                        <form onSubmit={handleRegitration} className="card-body flex-shrink-0">

                            <h1 className="text-5xl font-bold">Registration now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Country of Residence</span>
                                </label>
                                <select name="country" className="select select-bordered w-full">
                                    <option disabled selected>choose coubtry?</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <div>
                                <p>Already have a Account? <Link className="text-green-600 font-bold" to={'/login'}>Login!</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;