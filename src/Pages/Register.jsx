import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';



const Register = () => {
  const {createUser, updatedUser, setUser } = use(AuthContext) 
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
        // updatedUser({displayName: registerData.name , photoURL:registerData.photo}).then(()=>{
        //   setUser({...user ,displayName:registerData.name , photoURL:registerData.photo})
        // }) 
        // .catch((error)=>{
        //   console.log(error);
        //   setUser(user)
          
        })         
        })
        .catch((error)=>{
          console.log(error);
        })
    }

    const handlegooglesign = ()=>{

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
          <button onClick={handlegooglesign} type='submit' className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
        <p >Already Have an Account?<Link to='/login'><span className="text-cyan-800 underline text-md ml-2">Login</span></Link>  </p>
        </div>
      </div>
    </div>
    );
};

export default Register;