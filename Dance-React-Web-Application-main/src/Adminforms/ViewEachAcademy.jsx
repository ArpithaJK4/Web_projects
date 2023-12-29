import React,{useEffect,useState} from "react";
import axiosInstance from "../Helpers/axiosInstance";
import { useNavigate,useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ViewEachAcademy = () => {
    let token=localStorage.getItem("token")
    let {id} = useParams()

    let [academy,setAcademy]=useState([])
    let navigate= useNavigate()
  
    let handleDelete = async(id)=>{
      let data = await axiosInstance.delete(`/academies/delete/${id}`,
      {headers:{Authorization:`Bearer ${token}`}})
      window.location.assign("/adminDashBoard/viewAcademy")
      alert(`${id} deleted Successfully`)
    }
    useEffect(()=>{
        let fetchData=async()=>{
          let {data} = await axiosInstance.get(`/academies/get/${id}`,
          {headers:{Authorization:`Bearer ${token}`}})
          let finalData=data.data
          setAcademy(finalData)
          console.log(finalData);
        }
        fetchData()
      },[])
  return (
    <div id="view-academyblock">
    <p>View {id} Details</p>
    <div id="academy-div">
          <p>{`Name: ${academy.academyName}`}</p>
          <p>{`Contact: ${academy.contact}`}</p>
          <p>{`Description: ${academy.description}`}</p>
          <p>{`Email: ${academy.email}`}</p>
          <div id="view-buttons">
<Link  to={`/adminDashBoard/viewAcademy/viewEachAcademy/editAcademy/${academy.id}`}><button id='green-btn' >Edit</button></Link>            
   <button id="yellow-btn"><Link to={`/adminDashBoard/viewAcademy/viewEachAcademy/addBranch/${academy.id}`} id="link-id">Add Branch</Link> </button>        
   <button id="delete-btn" onClick={()=>{
            handleDelete(academy.id)
          }}>Delete</button>   
          </div>
         
        
    </div>
    
</div>
  )
}

export default ViewEachAcademy