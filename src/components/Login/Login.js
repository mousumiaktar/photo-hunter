import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginimage from '../../images/social-images.png';
import './Login.css';


const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();


    let from = location.state?.from?.pathname || "/";
    let errorItem;

      const 
      [signInWithEmailAndPassword,
        user,
        loading,
        error
      ] =useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if(loading || sending){
        return <Loading></Loading>
    }
   
   if(user){
       navigate(from, { replace: true });
   }

   if (error) {
    errorItem=<p className='text-danger'>Error: {error?.message}</p>  
  }
   const handleSubmit = (event) => {
     event.preventDefault();
     const email = emailRef.current.value;
     const password = passwordRef.current.value;
     
    signInWithEmailAndPassword(email, password);
  
   };
   
   const navigateRegister = (event) => {
     navigate("/register");
   };

   const resetPassword = async() =>{
    const email = emailRef.current.value;
      if (email) {
        await sendPasswordResetEmail(email)
      toast('Sent email');
      }
      else{
        toast('please enter your email');
      }
   }

   return (
     <div className='container'>
       <div className='login-container'>
         <div>
            <img src={loginimage} alt="" />
         </div>
         <div>
         <div className="w-50 mx-auto">
         <h3 className="text-primary mt-2">Please Login</h3>

         <Form onSubmit={handleSubmit}>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Control
               ref={emailRef} type="email" placeholder="Enter email" required />
           </Form.Group>


           <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Control
               ref={passwordRef} type="password" placeholder="Password" required />
           </Form.Group>


           <Button variant="primary w-100  d-block mb-3" type="submit">Login</Button>
         </Form>

          {errorItem} 

         <p>
           Are You new here? 
           <Link to="/register" className="text-primary pe-auto text-decoration-none" onClick={navigateRegister} > Please Register </Link>
            </p>

         <p>
           Forget Password? <button  to="/register" className="btn btn-link text-primary pe-auto text-decoration-none" onClick={resetPassword}  >Reset Password </button> </p>
           <SocialLogin></SocialLogin>
           <ToastContainer />
       </div>
         </div>
       </div>
     </div>
   );
};

export default Login;