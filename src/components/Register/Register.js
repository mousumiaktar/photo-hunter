import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';

const Register = () => {
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile, updating, error1] = useUpdateProfile(auth);

  const navigateLogin = () => {
    navigate("/login");
  };
  if (user) {
    console.log('user', user);
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
          console.log('Updated profile');

          navigate('/home')
  };


  return (
    <div className="register-form-container">
      <h2>Please Register </h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Enter Your Name" />

        <input type="email" name="email" id="" placeholder="Enter Your Email" required />

        <input type="password" name="password" id="" placeholder="Enter Your Password" required />

        <input className="W-50 mx-auto btn btn-primary mt-2" type="submit" value="Register" />
      </form>

      <p> Already have an account? <Link to="/login" className="text-primary pe-auto text-decoration-none" onClick={navigateLogin}> Please Login </Link> </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;