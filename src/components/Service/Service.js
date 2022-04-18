import React from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Service.css';

const Service = ({ service }) => {
    const { name, picture, description, price } = service;
    const navigate = useNavigate();

    const [user] = useAuthState(auth);

    const handleButtonNavigate = () => {
        if (user) {
            navigate('/cheakout');
        }
        else {
            navigate('/login');
        }

    }

    return (
        <div className='container'>
            <div className='container-area'>
                <div className='container-info'>
                <img src={picture} alt="" />
            </div>
                <div className='container-text'>
                    <h4>{name}</h4>
                    <p>price: {price}</p>
                    <p>{description}</p>
                </div>
                <button className='multiple-button' onClick={handleButtonNavigate}>Click here </button>
                </div>
        </div>
    );
};

export default Service;