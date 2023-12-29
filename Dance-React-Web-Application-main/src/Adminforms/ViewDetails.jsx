import React,{useEffect,useState} from 'react'
import axiosInstance from '../Helpers/axiosInstance'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ViewDetails = () => {

    let token=window.localStorage.getItem("token")
    let {id} = useParams()
    let [manager,setManager]=useState("")

    useEffect(()=>{
        let fetchData=async()=>{
          let {data} = await axiosInstance.get(`/academymanagers/get/${id}`,
          {headers:{Authorization:`Bearer ${token}`}})
          let finalData=data.data
          setManager(finalData)
        }
        fetchData()
      },[])

      let handleDelete = async(id)=>{
        let data = await axiosInstance.delete(`/academymanagers/delete/${id}`,
        {headers:{Authorization:`Bearer ${token}`}})
        window.location.assign("/adminDashBoard/viewAcademyManager")
        alert("Admin Manager data deleted successfully")
      }

  return (
    <div id="view-managerblock">
        <p>View Manager's Details</p>
        <div id="managers-div">
              <p>{`Name: ${manager.userName}`}</p>
              <p>{`Email: ${manager.email}`}</p>
              <p>{`Date of Birth: ${manager.dob}`}</p>
              <p>{`Phone No.: ${manager.phone}`}</p>
              <p>{`Gender: ${manager.gender}`}</p>
              <div id="view-buttons">
   <Link  to={`/adminDashBoard/viewAcademyManager/viewDetails/updateAcademyManager/${manager.id}`}><button id='green-btn' >Update</button></Link>            
       <button id="yellow-btn"><Link to={`/adminDashBoard/viewAcademyManager/viewDetails/addAcademy/${manager.id}`} id="link-id">Add Academy</Link> </button>        
       <button id="delete-btn" onClick={()=>{
                handleDelete(manager.id)
              }}>Delete</button>   
              </div>
             
            
        </div>
        
    </div>
  )
}

export default ViewDetails