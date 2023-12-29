import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../Helpers/axiosInstance'
import { useParams } from 'react-router-dom'

const UpdateAcademyManager = () => {
    let navigate=useNavigate()
    let {id} = useParams()
    let [manager,setManager]=useState("")
    let token= window.localStorage.getItem("token")


let handleData=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setManager({...manager,[name]:value})
}

let handleSubmit=async (e)=>{
    e.preventDefault()
    try{
        let payload=manager
        let response=await axiosInstance.put("/academymanagers/update",payload,{
          headers: {
            Authorization:`Bearer ${token}`,
          },
        });
        console.log(response);
        alert(" Academy Manager Updated Successfully");
        navigate("/adminDashBoard/viewAcademyManager")
    }
    catch{
        console.log("Unable to connect to Server");
    }


}
useEffect(()=>{
    let fetchData=async()=>{
      let {data} = await axiosInstance.get(`/academymanagers/get/${id}`,
      {headers:{Authorization:`Bearer ${token}`}})
      let finalData=data.data
      setManager(finalData)
    }
    fetchData()
  },[])

  return (
    <div id="manager-register">
    <div id="manager-registerform">
    <form action="" id="form-reg" onSubmit={handleSubmit}>
    <h2>UPDATE ACADEMY MANAGER DETAILS</h2>
    <table id="table2">
        
    <tr>
        <td><label htmlFor="userName">Username: </label></td>
        <td><input type="text" required name="userName" id="userName" value={manager.userName} onChange={handleData}/></td>
    </tr>
    <tr>
        <td><label htmlFor="email">Email: </label></td>
        <td><input type="email" required name="email" id="email" value={manager.email} onChange={handleData}/></td>
    </tr>
    <tr>
        <td><label htmlFor="password">Password: </label></td>
        <td><input type="password" required name="password" id="password" value={manager.pass} onChange={handleData}/></td>
    </tr>
    <tr>
        <td><label htmlFor="dob">Date of Birth: </label></td>
        <td><input type="date" name="dob" id="dob" value={manager.dob} onChange={handleData}/></td>
    </tr>
    <tr>
        <td><label htmlFor="phone">Phone: </label></td>
        <td><input type="text" name="phone" id="phone" value={manager.phone} onChange={handleData}/></td>
    </tr>
    <tr>
        <td><label htmlFor="">Gender: </label></td>
        <td><input type="radio"  name="gender" value="Male" id="Male"onChange={handleData}/>Male <input type="radio" id="Female"  name="gender" value="Female" onChange={handleData}/>Female</td>
        
    </tr>
    <div className='btns'>
    <button onClick={handleSubmit}>Submit</button>
    </div>

  </table>
    </form>
    </div>
 
</div>
  )
}

export default UpdateAcademyManager