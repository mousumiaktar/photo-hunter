import React from 'react';
import googleicon from '../images/social-icon/google.png';
import githubicon from '../images/social-icon/Github.png';
import facebookicon from '../images/social-icon/facebook.png';
import './SocialLogin.css';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorItem;

    if (error || error1) {
        errorItem=<p className='text-danger'>Error: {error?.message} {error1?.message}</p>  
      }

      if(user || user1){
          navigate('/home');
      }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>

            {errorItem}

            <button onClick={() => signInWithGoogle()} className='btn-1'>
                <div><img src={googleicon} alt="" /></div>
                <div>Sign In With Google </div>
            </button>


            <button onClick={() => signInWithGithub()} className='btn-1'>
                <div><img src={githubicon} alt="" /></div>
                <div>Sign In With GitHub</div>
            </button>
        </div>
    );
};

export default SocialLogin;