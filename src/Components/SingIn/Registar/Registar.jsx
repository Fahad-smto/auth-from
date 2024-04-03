import {  createUserWithEmailAndPassword } from "firebase/auth";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import auth from "../../../firebase/firebase.config";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Registar = () => {
   
 
    const [showPassword,setShowpassword] = useState(false);
     const [registarError ,setRegisterError] = useState(''); 
    const [success, setSuccess] =useState('');

    const handleRegistar = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email,password,accepted);


        
        
        if(password.length < 6 ){
            setRegisterError('password should be at least 6 caracters or longer');
            return;
        }

       else if(!/[A-Z]/.test(password)){
            setRegisterError('your password should have at least one uppercase characters')
            return;
        }
        else if (!accepted){
            setRegisterError('pleace accept our terms and conditions!')
            return;
        }

        setRegisterError('');
        setSuccess('');

      

        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            console.log(result.user);
            setSuccess('user created successfully!');
        })
        .catch(error =>{
            console.error(error);
            setRegisterError(error.message);
            // if( error.message ===  'Firebase: Password should be at least 6 characters (auth/weak-password).'){
            //     setRegisterError('password should be at least 6 caracters or longer');
            //     return;
            // }
    
            // setRegisterError(error.message);
        })
    }
    return (
        <div className=" mt-[50px] ">
            <div className="ml-[530px] font-bold text-2xl">
            <h2 className="" >Please Registar</h2>
            </div>
            
            <div className=" flex justify-center items-center ">
    
           <form onSubmit={handleRegistar} className=" mt-3">
           <input className="mb-4 py-2 border w-full rounded-lg px-4" type="email" name="email" placeholder="Email Adderss" required />
            <br />
          <div className="relative">
          <input className="mb-4 py-2 border w-full rounded-lg px-4"
            type={showPassword ? 'text':"password" }
            name="password" 
            placeholder="Password"
             required />
             <span className="absolute mt-3 right-2" onClick={()=>setShowpassword(!showPassword)} > {showPassword ?  <FaRegEye />:<FaRegEyeSlash /> }</span>
            <br />


            
            <div className="mb-1">
                <input type="checkbox"name="terms" />
                <label className="ml-2">Accept our <a href="">Terms and condition</a></label>
            </div>



             <input className="btn bg-green-400 text-white mb-4 py-2 w-[300px] " type="submit" name="Registar" placeholder="Email Adderss" />
          </div>
             <br />
             </form>
             
            </div>
            {
                registarError && <p className="text-red-700 ml-[500px]">{registarError}</p>
             }
             {
                success && <p className="text-green-700 ml-[500px]">{success}</p>
             }
             <div className="ml-[500px]">
             <p>Already have an account? please <NavLink className='text-blue-500 underline' to={'/log-in'}>login</NavLink></p>
             </div>
        </div>
    );
};

export default Registar;