import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='register-form-container'>
            <h2>Please Register</h2>
            <form>
                <input type="text" name="name" id="" placeholder='your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Are you agree about these condition</label>

                <input 
                className='w-50 mx-auto btn btn-primary mt-2' type="submit" 
                value="Register" />

            </form>
            <p>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' >Please Login</Link></p>
            
        </div>
    );
};

export default Register;