import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate();

    const navigateToLogin = () =>{
        navigate('/login');
    }

    if (user){
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault()

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(name, email, password)

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form-container'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Enter Your Name' />

                <input type="email" name="email" id="" placeholder='Enter YourEmail' required />

                <input type="password" name="password" id="" placeholder='Enter Your Password' required />

                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Are you agree about these condition</label>

                <input 
                className='w-50 mx-auto btn btn-primary mt-2' type="submit" 
                value="Register" />

            </form>
            <p>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateToLogin} >Please Login</Link></p>
            
        </div>
    );
};

export default Register;