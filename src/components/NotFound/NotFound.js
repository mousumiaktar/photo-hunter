import React from 'react';
import notfoundimg from '../../images/pagenotfound/notfound2.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container'>
            <div className='notfound-img'>
            <img src={notfoundimg} alt="" />
            </div>
        </div>
    );
};

export default NotFound;