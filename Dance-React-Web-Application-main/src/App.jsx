
import React from 'react'
import Navbar from "./Navbar/Navbar"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import "./global.css"

import Home from "./Components/Home"
import About from "./Components/About"
import Courses from "./Components/Courses"
import Login from "./Components/Login"
import Register from './Components/Register'
import PageNotFound from "./Components/PageNotFound"
import Adminregister from "./Adminforms/Adminregister"
import ProtectedRoute from './Routes/Protectedroute.jsx'
import AcademyManagerRegister from './Adminforms/AcademyManagerRegister'
import ViewAcademyManager from './Adminforms/ViewAcademyManager'
import AdminDashboard from "./Adminforms/AdminDashboard"
import ViewAcademy from "./Adminforms/ViewAcademy"
import ViewDetails from "./Adminforms/ViewDetails"
import UpdateAcademyManager from './Adminforms/UpdateAcademyManager'
import AddAcademy from "./Adminforms/AddAcademy"
import ViewEachAcademy from './Adminforms/ViewEachAcademy'
import EditAcademy from './Adminforms/EditAcademy'
import AddBranch from './Adminforms/AddBranch'
import ViewBranch from './Adminforms/ViewBranch'
import ViewEachBranch from './Adminforms/ViewEachBranch'
import EditBranch from './Adminforms/EditBranch'
import AddCourse from './Adminforms/AddCourse'
import ViewCourse from './Adminforms/ViewCourse'
import ViewEachCourse from './Adminforms/ViewEachCourse'
import EditCourse from './Adminforms/EditCourse'

const App = () => {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
    <Route path="/aboutus" element={<About/>}/>
    <Route path="/courses" element={<Courses/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/adminregister" element={<Adminregister/>}/>
    <Route path="*" element={<PageNotFound/>}/>

    <Route path="/adminDashBoard" element={<AdminDashboard/>}>
<Route path="/adminDashBoard/addAcademyManager" element={<AcademyManagerRegister/>}/>
<Route path="/adminDashBoard/viewAcademyManager" element={<ViewAcademyManager/>}/>
<Route path='/adminDashBoard/viewAcademyManager/viewDetails/:id'  element={<ViewDetails/>}/>
<Route path='/adminDashBoard/viewAcademyManager/viewDetails/updateAcademyManager/:id' element={<UpdateAcademyManager/>} />
<Route path='/adminDashBoard/viewAcademyManager/viewDetails/addAcademy/:id' element={<AddAcademy/>}/>
<Route path='/adminDashBoard/viewAcademy' element={<ViewAcademy/>}/>
<Route path='/adminDashBoard/viewAcademy/viewEachAcademy/:id' element={<ViewEachAcademy/>}/>
<Route path='/adminDashBoard/viewAcademy/viewEachAcademy/editAcademy/:id' element={<EditAcademy/>}/>
<Route path='/adminDashBoard/viewAcademy/viewEachAcademy/addBranch/:id' element={<AddBranch/>}/>
<Route path='/adminDashBoard/viewBranch' element={<ViewBranch/>}/>
<Route path='/adminDashBoard/viewBranch/viewEachBranch/:id' element={<ViewEachBranch/>}/>
<Route path='/adminDashBoard/viewBranch/viewEachBranch/editBranch/:id' element={<EditBranch/>}/>
<Route path='/adminDashBoard/viewBranch/viewEachBranch/addCourse/:id' element={<AddCourse/>}/>
<Route path='/adminDashBoard/viewCourse' element={<ViewCourse/>}/>
<Route path='/adminDashBoard/viewCourse/viewEachCourse/:id' element={<ViewEachCourse/>}/>
<Route path='/adminDashBoard/viewCourse/viewEachCourse/editCourse/:id' element={<EditCourse/>}/>
    </Route>


  </Routes>
  
  
  </BrowserRouter>
  )
}

export default App
