import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import toast from 'react-hot-toast';

const Newsletter = () => {


    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.email.value)) {
            return toast.error("please write a email")
        } else {
            toast.success('Thank you for subscribing to our newslater')
            e.target.reset();
        }

    }
    return (
        <div className="form-control  items-center">
            <h1 className=' text-3xl font-bold text-[tomato] mt-12 mb-8'>Newsletter</h1>
            <form onSubmit={handleSubscribe}>
                <label className="input-group justify-center">
                    <input type="email" name='email' placeholder="@gmail.com" className="input input-bordered w-2/4 mb-20" />
                    <button type='submit' className='btn btn-secondary text-xl font-bold text-[white]'>Subscribe</button>
                </label>
            </form>
        </div>
    );
};

export default Newsletter;