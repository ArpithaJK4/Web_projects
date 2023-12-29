import React,{useEffect,useState} from 'react'
import axiosInstance from '../Helpers/axiosInstance'
import { useNavigate,useParams } from 'react-router-dom'


const EditAcademy = () => {
    let [academy, setAcademy] = useState([])
    let token = localStorage.getItem("token")
    let {id} = useParams()
    let navigate = useNavigate()

    let handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            let payload = academy
            await axiosInstance.put("/academies/update",payload,{headers:{Authorization:`Bearer ${token}`}})
            alert(`${id} deails Updated Successfully`)
            navigate("/adminDashboard/viewAcademy")
        }
        catch{
            console.log("Unnable to connect server");
        }
    }
    let handleData=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setAcademy({...academy,[name]:value})
    }
    useEffect(()=>{
        let fetch=async()=>{
            let {data} = await axiosInstance.get(`/academies/get/${id}`,{headers:{Authorization:`Bearer ${token}`}})
            let fetchData = data.data
            setAcademy(fetchData)
        }
        fetch()
    },[])
  return (
    <div id="div3">
    <div id="register-academy">
    <h2>Update {id} Details</h2>
   <form action="" id="form-re" onSubmit={handleSubmit}>
      
   <table id="table">
 
   <tr>
       <td><label htmlFor="academyName">Academy Name: </label></td>
       <td><input type="text" required name="academyName" id="academyName"  value={academy.academyName} onChange={handleData}/></td>
   </tr>
   <tr>
       <td><label htmlFor="contact">Contact: </label></td>
       <td><input type="text" required name="contact" id="contact" value={academy.contact} onChange={handleData}/></td>
   </tr>
   <tr>
       <td><label htmlFor="description">Description: </label></td>
       <td><input type="text" required name="description" id="description" value={academy.description} onChange={handleData}/></td>
   </tr>
   <tr>
       <td><label htmlFor="email">Email: </label></td>
       <td><input type="email"required name="email" id="email"  value={academy.email} onChange={handleData}/></td>
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

export default EditAcademy