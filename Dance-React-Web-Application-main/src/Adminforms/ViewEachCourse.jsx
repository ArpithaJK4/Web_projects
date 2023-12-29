import React,{useEffect,useState} from 'react'
import {Link, useParams } from 'react-router-dom'
import axiosInstance from '../Helpers/axiosInstance'
const ViewEachCourse = () => {
    let token=window.localStorage.getItem("token")
    let {id} = useParams()
     let [course,setCourse]=useState([])
    let handleDelete = async(id)=>{
      let data = await axiosInstance.delete(`/dancecourses/delete/${id}`,
      {headers:{Authorization:`Bearer ${token}`}})
      window.location.assign("/adminDashBoard/viewCourse")
      alert(`${id} deleted Successfully`)
    }
    useEffect(()=>{
      let fetchData=async()=>{
        let {data} = await axiosInstance.get(`/dancecourses/get/${id}`,
        {headers:{Authorization:`Bearer ${token}`}})
        let finalData=data.data
        setCourse(finalData)
        console.log(finalData);
      }
      fetchData()
    },[])
  return (
    <div id="view-academyblock">
    <p>View {id} Details</p>
    <div id="vieweachcourse-div">
          <p>{`Course Duration: ${course.courseDurationInMonths}`}</p>
          <p>{`Fees (in Rupees): ${course.fee}`}</p>
          <p>{`Type: ${course.type}`}</p>
         
          <div id="view-buttons">
<Link  to={`/adminDashBoard/viewCourse/viewEachCourse/editCourse/${course.id}`}><button id='green-btn' >Edit</button></Link>            
    
   <button id="delete-btn" onClick={()=>{
            handleDelete(course.id)
          }}>Delete</button>   
          </div>
         
        
    </div>
    
</div>
  )
}

export default ViewEachCourse