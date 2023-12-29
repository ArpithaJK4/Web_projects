import React,{useState,useEffect} from 'react'
import axiosInstance from '../Helpers/axiosInstance'
import { Link } from 'react-router-dom'

const ViewBranch = () => {
  let token=window.localStorage.getItem("token")
  let [users,setUsers]=useState([])
 
  useEffect(()=>{
   let fetchData=async()=>{
     try{
     let response =await axiosInstance.get("/branches/getall",{
       headers:{
         Authorization:`Bearer ${token}`,
       },
     });
     setUsers(response.data.data)
   }
   catch(err){
     alert("Unable to connect the server")
 
   }
   }
   fetchData()
 },[])
  return (
    <div id="academy-manager">
    <p>View Branch Details</p>
    <div id="view-block">
      {users.map((x)=>{
        return(
          <div id="branch-card" >
            <p>{`Address: ${x.address}`}</p>
            <p>{`City: ${x.city}`}</p>
            <p>{`Phone: ${x.phone}`}</p>
              <p>{`Pincode: ${x.pincode}`}</p>
            <div id="view-button">
            <Link  to={`/adminDashBoard/viewBranch/viewEachBranch/${x.id}`}><button id='view-link'>View</button></Link>
            </div>


          </div>    
        )
      })}
    </div>
  </div>
  )
}

export default ViewBranch
