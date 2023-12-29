import React,{useEffect,useState} from 'react'
import axiosInstance from '../Helpers/axiosInstance'
import { Link } from 'react-router-dom'

const ViewAcademy = () => {
  let token=window.localStorage.getItem("token")
  let [users,setUsers]=useState([])
 
  useEffect(()=>{
   let fetchData=async()=>{
     try{
     let response =await axiosInstance.get("/academies/getall",{
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
    <p>View Academy Details</p>
    <div id="view-block">
      {users.map((x)=>{
        return(
          <div id="academy-card" >
            <p>{`Academy Name: ${x.academyName}`}</p>
            <p>{`Contact: ${x.contact}`}</p>
            <p>{`Description: ${x.description}`}</p>
              <p>{`Email: ${x.email}`}</p>
            <div id="view-button">
            <Link  to={`/adminDashBoard/viewAcademy/viewEachAcademy/${x.id}`}><button id='view-link'>View</button></Link>
            </div>


          </div>
        )
      })}
    </div>

    

    
  </div>
  )
}

export default ViewAcademy
