import React from 'react';
import notfoundimg from '../../images/pagenotfound/notfound2.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container'>
            <img src={notfoundimg} alt="" />
        </div>
    );
};

export default NotFound;