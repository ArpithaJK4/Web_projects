import React,{useState} from 'react'
import axiosInstance from '../Helpers/axiosInstance.js'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let navigate=useNavigate()
let [data,setData]=useState({
    userName:"",
    email:"",
    password:"",
    dob:"",
    phone:"",
    gender:""
})

let {userName,email,password,dob,phone,gender}=data

let handleData=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setData({...data,[name]:value})
}

let handleSubmit=async (e)=>{
    e.preventDefault()
    console.log(data);
    try{
        let payload={
            userName,
            email,
            password,
            dob,
            phone,
            gender
        }

        let finalData=await axiosInstance.post("/users/save",payload)
        console.log(finalData);
        alert("Registered Successfully")
        navigate("/login")
    }
    catch{
        console.log("Unable to connect to Server");
    }

}


  return (
    <div id="div1">
         <div id="register">
         <h2>REGISTER FORM</h2>
        <form action="" id="form-re" onSubmit={handleSubmit}>
           
        <table id="table">
      
        <tr>
            <td><label htmlFor="userName">Username: </label></td>
            <td><input type="text" required name="userName" id="userName"onChange={handleData}/></td>
        </tr>
        <tr>
            <td><label htmlFor="email">Email: </label></td>
            <td><input type="email" required name="email" id="email" onChange={handleData}/></td>
        </tr>
        <tr>
            <td><label htmlFor="password">Password: </label></td>
            <td><input type="password" required name="password" id="password"onChange={handleData}/></td>
        </tr>
        <tr>
            <td><label htmlFor="dob">Date of Birth: </label></td>
            <td><input type="date" name="dob" id="dob" onChange={handleData}/></td>
        </tr>
        <tr>
            <td><label htmlFor="phone">Phone: </label></td>
            <td><input type="text" name="phone" id="phone" onChange={handleData}/></td>
        </tr>
        <tr>
            <td><label htmlFor="">Gender: </label></td>
            <td><input type="radio"  name="gender" value="Male" id="Male"onChange={handleData}/>Male <input type="radio" id="Female"  name="gender" value="Female" onChange={handleData}/>Female</td>
            
        </tr>
        <div className='btns'>
        <button>Submit</button>
        </div>
    
      </table>
        </form>
     
    </div>
    </div>
   
  )
}

export default Register
