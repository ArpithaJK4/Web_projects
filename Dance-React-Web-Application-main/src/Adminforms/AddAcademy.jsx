import React,{useState} from 'react'
import axiosInstance from '../Helpers/axiosInstance.js'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const AddAcademy = () => {
    let {id}=useParams()
    let token=window.localStorage.getItem("token")
    let navigate=useNavigate()
    let [data,setData]=useState({
        academyName:"",
        contact:"",
        description:"",
        email:""
    })
    
    let {academyName,contact,description,email}=data
    
    let handleData=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setData({...data,[name]:value})
    }
    
    let handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(data);
        try{
          let payload={
            academyName,
            description,
            email,
            contact
          }
          console.log(id);
          let finalData = await axiosInstance.post(`/academies/saveacademy/?managerId=${id}`,payload,{headers:{Authorization:`Bearer ${token}`}})
          console.log(finalData)
          alert(`Successfully Added with Academy as ${academyName}`)
          navigate('/adminDashBoard/viewAcademy')
        }
        catch{
          console.log("Unable to connect to server");
        }
      }
    
  return (
    <div id="div3">
    <div id="register-academy">
    <h2>ADD ACADEMY FORM</h2>
   <form action="" id="form-re" onSubmit={handleSubmit}>
      
   <table id="table">
 
   <tr>
       <td><label htmlFor="academyName">Academy Name: </label></td>
       <td><input type="text" required name="academyName" id="academyName"onChange={handleData}/></td>
   </tr>
   <tr>
       <td><label htmlFor="contact">Contact: </label></td>
       <td><input type="contact" required name="contact" id="contact" onChange={handleData}/></td>
   </tr>
   <tr>
       <td><label htmlFor="description">Description: </label></td>
       <td><input type="description" required name="description" id="description" onChange={handleData}/></td>
   </tr>
   <tr>
       <td><label htmlFor="email">Email: </label></td>
       <td><input type="email" name="email" id="email" onChange={handleData}/></td>
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


export default AddAcademy