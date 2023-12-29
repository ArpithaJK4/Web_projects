import React from "react";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Menu = () => {
  let navigate=useNavigate()
  let role=localStorage.getItem("role")
  let token=localStorage.getItem("token")

  let logoutHandler=()=>{
    alert("Are you Sure want to Logout?")
    localStorage.clear()
    navigate("/login")
  }
  return (
    <div id='menu'>
        <ul>
            <li><Link id="link" to={"/"}>Home</Link></li>
            <li><Link id="link" to={"/aboutus"}>About Us</Link></li>
            <li><Link id="link" to={"/courses"}>Courses</Link></li>
           {role==="ROLE_ADMIN" ?<li><Link id="link" to={"adminDashBoard"}>Admin Dashboard</Link></li>:null }
            {token ? <li> <Link id="link" onClick={logoutHandler} to={"/login"}>Logout</Link></li>:
            <> 
            <li><Link id="link" to={"/register"}>Register</Link></li>
            <li><Link id="link" to={"/login"}>Login</Link></li>
            </>}
        </ul>
    </div>
  )
}

export default Menu