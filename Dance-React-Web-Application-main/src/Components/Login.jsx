import React,{useState} from 'react'
import axiosInstance from '../Helpers/axiosInstance.js'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate=useNavigate()
    let [data,setData]=useState({
        userEmail:"",
        password:""
    })

    let {userEmail,password}=data

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
                userEmail,
                password
            }
    
            let {data}=await axiosInstance.post("/authenticate",payload)
            console.log(data);
            let token= data.token
            let role= data.role
            console.log(token);
            console.log(role);

            if(token){
                localStorage.setItem("token",token);
                localStorage.setItem("role",role);
                if(role==="ROLE_ADMIN"){
              alert(`Successfully logged in with the email ${userEmail} as Admin`)
               navigate("/")
                }
                else{
                    alert(`Successfully logged in with the email ${userEmail} as User`)
                    navigate("/")
                }
            }
            else{
                localStorage.removeItem("token",token)
                localStorage.removeItem("role",role)

            }
        }
        catch{
            console.log("Unable to connect to Server");
        }
    
    }
  return (
    <div id="div2">
         <div id="login">
        <h2>LOGIN FORM</h2>
        <form action="" onSubmit={handleSubmit}>
            <table id="table1">
                <tr>
                    <td>
                <label htmlFor="">Username: </label>
                    </td>
                    <td>
                    <input type="email" required name="userEmail" id="userEmail" onChange={handleData}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <label htmlFor="">Password: </label>
                    </td>
                    <td>
                    <input type="password" name="password" id="password" required onChange={handleData}/>
                    </td>
                </tr>
            </table>
            <div className='btns'>
            <button>Login</button>
            </div>
             
        </form>
    </div>
    </div>
   
  )
}

export default Login