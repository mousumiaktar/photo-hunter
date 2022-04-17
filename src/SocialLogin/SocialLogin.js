import React from 'react';
import './SocialLogin.css';
import googleicon from '../images/social-icon/google.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div>
            <button className='btn btn-primary w-50'>
                <img style={{width: '30px'}} src={googleicon} alt="" />
                Sign In With Google
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;