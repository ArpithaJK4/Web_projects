import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../Helpers/axiosInstance'

const EditBranch = () => {
    let [branch, setBranch] = useState([])
    let token =window.localStorage.getItem("token")
    let {id} = useParams()
    let navigate = useNavigate()

    let handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            let payload = branch
            await axiosInstance.put(`/branches/update/${id}`,payload,{headers:{Authorization:`Bearer ${token}`}})
            alert(`${id} updated Successfully`)
            navigate("/adminDashboard/viewBranch")
        }
        catch{
            console.log("Unnable to connect server");
        }
    }
    let handleData=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setBranch({...branch,[name]:value})
    }
    useEffect(()=>{
        let fetch=async()=>{
            let {data} = await axiosInstance.get(`/branches/get/${id}`,{headers:{Authorization:`Bearer ${token}`}})
            let fetchData = data.data
            setBranch(fetchData)
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
       <td><label htmlFor="address">Address: </label></td>
       <td><input type="text" required name="address" id="address"  value={branch.address} onChange={handleData}/></td>
   </tr>
   <tr>
       <td><label htmlFor="city">City: </label></td>
       <td><input type="text" required name="city" id="city" value={branch.city} onChange={handleData}/></td>
   </tr>
   <tr>
       <td><label htmlFor="phone">Phone: </label></td>
       <td><input type="number" required name="phone" id="phone" value={branch.phone} onChange={handleData}/></td>
   </tr>
   <tr>
       <td><label htmlFor="pincode">Pincode: </label></td>
       <td><input type="number" name="pincode" id="pincode"  value={branch.pincode} onChange={handleData}/></td>
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

export default EditBranch