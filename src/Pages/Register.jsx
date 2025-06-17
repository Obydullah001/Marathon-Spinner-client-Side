import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import SocialLogin from '../Components/SocialLogin';



const Register = () => {
  const {createUser, updatedUser, setUser , googleSignIn } = use(AuthContext) 
  const navigate = useNavigate();
  const location = useLocation();
    const handleRegister = e =>{
        e.preventDefault()
         const form = e.target ;
        const formData = new FormData(form);
        const registerData = Object.fromEntries(formData.entries())
        console.log(registerData);
        createUser(registerData.email , registerData.password)
        .then((result)=>{
          const user = result.user;
          console.log(user);
        updatedUser({displayName: registerData.name , photoURL:registerData.photo}).then(()=>{
          setUser({...user ,displayName:registerData.name , photoURL:registerData.photo});
          navigate("/")
          toast.success('Sign Up Successful')
        }) 
        .catch((error)=>{
          console.log(error);
          setUser(user)
          
        })         
        })
        .catch((error)=>{
          console.log(error);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register  now!</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" name='name' placeholder="Your Name" required />
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" required />
            <label className="label">Photo</label>
            <input type="text" name='photo' className="input" placeholder="Your Photo URL" required />
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" 
            pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"  required/>
            <button type='submit' className="btn btn-neutral mt-4">Register </button>
          </form>
         <SocialLogin></SocialLogin>
        <p >Already Have an Account?<Link to='/login'><span className="text-cyan-800 underline text-md ml-2">Login</span></Link>  </p>
        </div>
      </div>
    </div>
    );
};

export default Register;