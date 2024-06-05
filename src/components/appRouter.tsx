
//  import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import ContactUs from './ContactUs'
// import NavBar from './NavBar'
import NotMatch from './NotMatch'
import SinglePost from './singlePost'
import HomeAll from './homeAll'
import Login from '../login/login'
import Sign from '../signUP/sign'
// import ADashBoard from '../Admin dashboard/Admin'
import Forms from '../Admin dashboard/form'
import Analytics from '../sidebar/analytics'
import Schedule from '../sidebar/schedule'
import Calender from '../sidebar/calender'
import Settings from '../sidebar/settings'
import Search from './Search'
import HalfDash from '../Admin dashboard/adminDash'
// import UserList from './UserList'
// import Register from './Register'
// import Login from './Login'
// import { ToastContainer } from 'react-toastify'
// import Dashboard from './Dashboard'
// import Profile from './Profile'
// import Logout from './Logout'
// import Product from './Product'
const AppRouter = () => {
  return (
    <Router>
      {/* <NavBar />
       <ToastContainer /> */}
      <Routes>
        <Route path="/" element={<HomeAll />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="*" element={<NotMatch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/search" element={<Search />} />
        <Route path='/form' element={<Forms />}>
          <Route path="halfdash" element={<HalfDash />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="calendar" element={<Calender />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* <Route path="/" element={<Nineth/>} /> */}
      </Routes>
    </Router>
  )
}

export default AppRouter