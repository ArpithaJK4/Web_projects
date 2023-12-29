import React from 'react'
import {Link} from "react-router-dom"

const AdminSidebar = () => {
  return (
    <div>
     <section id="section-sidebar">
      <article>
        <div id="adminsidebar-div">
          <ul>
            <h2>Admin Dashboard</h2>
            <li><Link className="admin-Link" to={"/adminDashBoard/addAcademyManager"}>Add Academy Manager</Link></li>
            <li><Link className="admin-Link"  to={"/adminDashBoard/viewAcademyManager"}>View Academy Manager</Link></li>
            <li><Link className="admin-Link"  to={"/adminDashBoard/viewAcademy"}>View Academy</Link></li>
            <li><Link className="admin-Link"  to={"/adminDashBoard/viewBranch"}>View Branch</Link></li>
            <li><Link className="admin-Link"  to={"/adminDashBoard/viewCourse"}>View Course</Link></li>
            <li><Link className="admin-Link"  to={"/"}>Home</Link></li>
          </ul>

        </div>
      </article>
     </section>
    </div>  
    )
}

export default AdminSidebar
