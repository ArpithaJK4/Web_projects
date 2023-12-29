import React,{useState} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import axiosInstance from '../Helpers/axiosInstance'

const AddCourse = () => {
    let {id}=useParams()
    let token=window.localStorage.getItem("token")
    let navigate=useNavigate()
    let [state,setState]=useState({
        courseDurationInMonths:"",
        fee:"",
        image:"xyz",
        type:""

    })
    let { courseDurationInMonths,fee,image,type}=state
    let handleData=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setState({...state,[name]:value})

    }
    let handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(state);
        try{
            let payload={
                courseDurationInMonths,
                fee,
                image,
                type
            }
            await axiosInstance.post(`/dancecourses/save?branchid=${id}`,payload,{
                headers:{Authorization:`Bearer ${token}`}
            })
            alert(`${type} Course added Successfully`)
            navigate("/adminDashBoard/viewCourse")
        }
        catch{
            console.log("Unable to post the Course");
        }
    }
  return (
    <div id="div3">
    <div id="register-academy">
    <h2>ADD COURSE DETAILS</h2>
   <form action="" id="form-re" onSubmit={handleSubmit}>
      
   <table id="table">
 
   <tr>
       <td><label htmlFor="courseDurationInMonths">Course Duration: </label></td>
       <td><input type="text" required name="courseDurationInMonths" id="courseDurationInMonths" value={courseDurationInMonths} onChange={handleData}/></td>
   </tr>
   <tr>
       <td><label htmlFor="fee">Fees (in Rupees): </label></td>
       <td><input type="text" required name="fee" id="fee" value={fee} onChange={handleData}/></td>
   </tr>
   <tr> 
       <td><label htmlFor="type">Type: </label></td>
       <td><input type="text" required name="type" id="type" value={type} onChange={handleData}/></td>
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

export default AddCourse
