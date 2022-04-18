import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './Cheakout.css';


const Cheakout = () => {
    const [email, setEmail] =useState('')
    const [address, setAddress] =useState('')
    const [phone, setPhone] =useState('')
    const [submit, setSubmit] =useState('')


    const handleEmail = event =>{
        setEmail(event.target.value);
    }

    const handleAddress = event =>{
        setAddress(event.target.value);
    }

    const handlePhone = event =>{
        setPhone(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        setSubmit(email, address, phone, submit);
        
            if(submit){
                toast('thank you for booking'); 
                }
    }
    const {cheakoutId} = useParams();

    return (
        <div>
            <div className="register-form">
          <h5 className='mb-4'>Want to book? Fill up the Form </h5>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Your Name" />

            <input onBlur={handleEmail} type="email" name="email" id="" placeholder="Enter Your Email" required />

            <input onBlur={handleAddress} type="address" name="address" id="" placeholder="Enter Your address" required />

            <input onBlur={handlePhone} type="phone" name="phone" id="" placeholder="Enter Your phone number" required />

            <input type="submit" value="submit" />
          </form>
          <ToastContainer />
        </div>
        </div>
    );
};

export default Cheakout;
