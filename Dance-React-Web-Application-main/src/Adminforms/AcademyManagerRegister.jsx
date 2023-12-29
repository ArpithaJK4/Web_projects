import React,{useState} from 'react'
import axiosInstance from '../Helpers/axiosInstance.js'
import { useNavigate } from 'react-router-dom'

const AcademyManageRegister = () => {
    let navigate=useNavigate()
    let token= window.localStorage.getItem("token")
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

        let finalData=await axiosInstance.post("/academymanagers/save",payload,{
          headers: {
            Authorization:`Bearer ${token}`,
          },
        });
        console.log(finalData);
        alert(" Academy Manager Registered Successfully");
        navigate("/adminDashBoard/viewAcademyManager")
    }
    catch{
        console.log("Unable to connect to Server");
    }

}


  return (
    
         <div id="manager-register">
        <div id="manager-registerform">
        <form action="" id="form-reg" onSubmit={handleSubmit}>
        <h2>ACADEMY MANAGER REGISTER FORM</h2>
        <table id="table2">
            
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

export default AcademyManageRegister
