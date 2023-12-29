import React,{useState} from 'react'
import axiosInstance from '../Helpers/axiosInstance.js'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const AddBranch = () => {
  let navigate=useNavigate()
  let {id}=useParams()
  let token=window.localStorage.getItem("token")
  let [data,setData]=useState({
    address:"",
    city:"",
    phone:"",
    pincode:""
})

let {address,city,phone,pincode}=data
let handleData=(e)=>{
  let name = e.target.name
  let value = e.target.value
  setData({...data,[name]:value})
}

let handleSubmit = async (e)=>{
  e.preventDefault()
  console.log(data);
  try{
    let payload={
      address,
      city,
      phone,
      pincode
    }
    console.log(id);
    let finalData = await axiosInstance.post(`/branches/save/?aid=${id}`,payload,{headers:{Authorization:`Bearer ${token}`}})
    console.log(finalData)
    alert(`Branch Added Successfully with ${city} City`)
    navigate('/adminDashboard/viewBranch')
  }
  catch{
    console.log("Unable to connect to server");
  }
}
  return (
    <div id="div3">
    <div id="register-academy">
    <h2>ADD YOUR BRANCH</h2>
   <form action="" id="form-re" onSubmit={handleSubmit}>
      
   <table id="table">
 
   <tr>
       <td><label htmlFor="address">Address: </label></td>
       <td><input type="text" required name="address" id="address" onChange={handleData}/></td>
   </tr>
   <tr>
       <td><label htmlFor="city">City: </label></td>
       <td><input type="text" required name="city" id="city" onChange={handleData}/></td>
   </tr>
   <tr>
       <td><label htmlFor="phone">Phone: </label></td>
       <td><input type="number" required name="phone" id="phone" onChange={handleData}/></td>
   </tr>
   <tr>
       <td><label htmlFor="pincode">Pincode: </label></td>
       <td><input type="number" name="pincode" id="pincode" onChange={handleData}/></td>
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

export default AddBranch
