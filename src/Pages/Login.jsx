import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import SocialLogin from '../Components/SocialLogin';

const Login = () => {
  const {logInUser} = use(AuthContext);
   const location = useLocation();
    const navigate = useNavigate();
    const from = (location?.state || "/") ;

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value ;
        const password = e.target.password.value ;
        const form = {email , password};
        console.log(form);
        logInUser(email , password)
        .then((result)=>{
          const user = result.user;
          console.log(user);
          navigate(from) ;
            toast.success("Login Successful ")

          
        })
        .catch((error)=>{
          const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorCode , errorMessage);
        })
    }

    

    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
          </form>
            <SocialLogin from={from}></SocialLogin>           
        <p >Don't Have an Account<Link to='/register'><span className="text-cyan-800 underline text-md ml-2">Sign Up </span></Link>  </p>
        </div>
      </div>
    </div>
    );
};

export default Login;