import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axiosInstance from '../Helpers/axiosInstance'

const ViewEachBranch = () => {
    let token=localStorage.getItem("token")
    let {id} = useParams()
     let [branch,setBranch]=useState([])
    let handleDelete = async(id)=>{
      let data = await axiosInstance.delete(`/branches/delete/${id}`,
      {headers:{Authorization:`Bearer ${token}`}})
      window.location.assign("/adminDashBoard/viewBranch")
      alert(`${id} deleted Successfully`)
    }
    useEffect(()=>{
      let fetchData=async()=>{
        let {data} = await axiosInstance.get(`/branches/get/${id}`,{headers:{Authorization:`Bearer ${token}`}})
        let finalData=data.data
        setBranch(finalData)
        console.log(finalData);
      }
      fetchData()
    },[])
  return (
    <div id="view-academyblock">
    <p>View {id} Details</p>
    <div id="academy-div">
          <p>{`Address: ${branch.address}`}</p>
          <p>{`City: ${branch.city}`}</p>
          <p>{`Phone: ${branch.phone}`}</p>
          <p>{`Pincode: ${branch.pincode}`}</p>
          <div id="view-buttons">
<Link  to={`/adminDashBoard/viewBranch/viewEachBranch/editBranch/${branch.id}`}><button id='green-btn' >Edit</button></Link>            
   <button id="yellow-btn"><Link to={`/adminDashBoard/viewBranch/viewEachBranch/addCourse/${branch.id}`} id="link-id">Add Course</Link> </button>        
   <button id="delete-btn" onClick={()=>{
            handleDelete(branch.id)
          }}>Delete</button>   
          </div>
         
        
    </div>
    
</div>
  )
}

export default ViewEachBranch
