import React,{useState,useEffect} from 'react'
import axiosInstance from '../Helpers/axiosInstance'
import { useNavigate,useParams } from 'react-router-dom'

const EditCourse = () => {
    let [course, setCourse] = useState([])
    let token = localStorage.getItem("token")
    let {id} = useParams()
    let navigate = useNavigate()

    let handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            let payload = course
            await axiosInstance.put(`/dancecourses/update/${id}`,payload,
            {headers:{Authorization:`Bearer ${token}`}})
            alert(`${id} Updated Successfully`)
            navigate("/adminDashBoard/viewCourse")
        }
        catch{
            console.log("Unnable to connect server");
        }
    }
    let handleData=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setCourse({...course,[name]:value})
    }
    useEffect(()=>{
        let fetch=async()=>{
            let {data} = await axiosInstance.get(`/dancecourses/get/${id}`,
            {headers:{Authorization:`Bearer ${token}`}})
            let fetchData = data.data
            setCourse(fetchData)
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
       <td><label htmlFor="courseDurationInMonths">Course Duration: </label></td>
       <td><input type="text" required name="courseDurationInMonths" id="courseDurationInMonths" value={course.courseDurationInMonths} onChange={handleData}/></td>
   </tr>
   <tr>
       <td><label htmlFor="fee">Fees (in Rupees): </label></td>
       <td><input type="text" required name="fee" id="fee" value={course.fee} onChange={handleData}/></td>
   </tr>
   <tr> 
       <td><label htmlFor="type">Type: </label></td>
       <td><input type="text" required name="type" id="type" value={course.type} onChange={handleData}/></td>
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

export default EditCourse