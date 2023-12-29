import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminMainbar = () => {
  return (
    <div id="mainbar">
   
      {/* <p>Welcome to Admin Dashboard</p> */}
      <Outlet/>
    </div>
  )
}

export default AdminMainbar