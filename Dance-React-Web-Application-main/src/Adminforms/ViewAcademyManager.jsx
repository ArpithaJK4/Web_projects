import React,{useState,useEffect} from 'react'
import axiosInstance from '../Helpers/axiosInstance'
import { Link } from 'react-router-dom'

const ViewAcademyManager = () => {
  let token=window.localStorage.getItem("token")
 let [users,setUsers]=useState([])

 useEffect(()=>{
  let fetchData=async()=>{
    try{
    let response =await axiosInstance.get("/academymanagers/getall",{
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
    <div id="viewacademy-manager">
      <p>Dance Academy Managers Details</p>
      <div id="view-block">
        {users.map((x)=>{
          return(
            <div id="academymanager-card" >
              <p>{`Name : ${x.userName}`}</p>
              <p>{`Email : ${x.email}`}</p>
              <p>{`Date of Birth : ${x.dob}`}</p>
              <p>{`Phone No.: ${x.phone}`}</p>
              <p>{`Gender : ${x.gender}`}</p>
              <div id="view-button">
              <Link  to={`/adminDashBoard/viewAcademyManager/viewDetails/${x.id}`}><button id='view-link'>View</button></Link>
              </div>


            </div>
          )
        })}
      </div>

      

      
    </div>
  )
}

export default ViewAcademyManager
