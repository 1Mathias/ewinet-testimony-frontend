import { Label } from '@material-ui/icons';
import axios from 'axios';
import React ,{useState} from 'react'
import './register.css'

export default function Register() {

    const [feedback,setFeedback]=useState("");
    const [userdata,setUserdata]=useState(
        {
            username:"",
            email:"",
            password:""
        }
    );

    const handleRegistration= async (e)=>{
       e.preventDefault();
       const register= async ()=>{
        try {
            const res= await axios.post('auth/register',userdata);
            console.log(res.data);
            setFeedback("Successfuly Register");
        } catch (error) {
            console.log(error);
            setFeedback("please try again!");
        }
         
       }


       if(userdata.email === "" || userdata.email === ""|| userdata.password=== "")
       {
         setFeedback("please fill the fields!");
       }else{
        register();
         setUserdata({
            username:"",
            email:"",
            password:""
       })
       }
       
      
    }

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
               
            <form className="registerForm">
                <label>{feedback}</label>
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Enter your username..."  value={userdata.username} onChange={(e)=>setUserdata({...userdata,username:e.target.value})}/>
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="Enter your email..." value={userdata.email}  onChange={(e)=>setUserdata({...userdata,email:e.target.value})}/>
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password..." value={userdata.password} onChange={(e)=>setUserdata({...userdata,password:e.target.value})} />
                <button className="registerButton" onClick={(e)=>handleRegistration(e)}>Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    )
}
