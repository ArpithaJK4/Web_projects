import React from 'react'
import AdminMainbar from './AdminMainbar'
import AdminSidebar from './AdminSidebar'

const AdminDashboard = () => {
  return (
    <div id="admin-dashboard">
      <AdminSidebar/>
      <AdminMainbar/>
    </div>
  )
}

export default AdminDashboard
