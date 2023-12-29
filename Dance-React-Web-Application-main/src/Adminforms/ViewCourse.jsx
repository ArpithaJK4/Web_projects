import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../Helpers/axiosInstance'

const ViewCourse = () => {
  let token=window.localStorage.getItem("token")
  let [users,setUsers]=useState([])
 
  useEffect(()=>{
   let fetchData=async()=>{
     try{
     let response =await axiosInstance.get("/dancecourses/getall",{
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
    <p>View Course Details</p>
    <div id="view-block">
      {users.map((x)=>{
        return(
          <div id="course-card" >
            <p>{`Course Duration (in months): ${x.courseDurationInMonths}`}</p>
            <p>{`Fees (in Rupees): ${x.fee}`}</p>
            <p>{`Type: ${x.type}`}</p>
            <div id="view-button">
            <Link  to={`/adminDashBoard/viewCourse/viewEachCourse/${x.id}`}><button id='view-link'>View</button></Link>
            </div>


          </div>    
        )
      })}
    </div>
  </div>
  )
}

export default ViewCourse
