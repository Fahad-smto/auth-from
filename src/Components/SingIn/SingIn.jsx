import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { NavLink } from "react-router-dom";

 
const SingIn = () => {
    
  const handleForgetPassword = (e) =>{
    console.log('sent email password')
   }
    const [registarError ,setRegisterError] = useState(''); 
    const [success, setSuccess] =useState('');


     const LogIn = (e) =>{
        e.preventDefault();
         const password = e.target.password.value;
         const email = e.target.email.value;
         console.log(password,email);

         setRegisterError('');
         setSuccess('');
 
         signInWithEmailAndPassword(auth,email,password)
         .then(result => {
            console.log(result.user)
            setSuccess('user loged in successfully!')
         })
         .catch(error => {console.error(error);
            setRegisterError(error.message);
        })
     }
    
     

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={LogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span  className="label-text">Password</span>
                </label>
                <input  name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <div className="">
                    <p>New to this website? <NavLink className='text-blue-500 underline' to={'/registar'}>Registar</NavLink></p>
                </div>
                {
                success && <p className="text-green-700 ">{success}</p>
             }

             
            {
                registarError && <p className="text-red-700 ">{registarError}</p>
             }
             
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>



          </div>
        </div>
      </div>
    );
};

export default SingIn;