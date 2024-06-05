// import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import ContactUs from './ContactUs'
// import NavBar from './NavBar'
import NotMatch from './NotMatch'
// import UserList from './UserList'
// import Register from './Register'
// import Login from './Login'
// import { ToastContainer } from 'react-toastify'
// import Dashboard from './Dashboard'
// import Profile from './Profile'
// import Logout from './Logout'
// import Product from './Product'
import AllPosts from './AllPosts'
import SinglePost from './SinglePost'
const AppRouter = () => {
  return (
    <Router>
    {/* <NavBar />
    <ToastContainer /> */}
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="product" element={<Product />} />
        <Route path="logout" element={<Logout />} />
        {/* Add other dashboard-related routes here */}
      {/* </Route>  */}
      <Route path="/" element={<AllPosts />} />
        <Route path="/posts/:id" element={<SinglePost />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </Router>
  )
}

export default AppRouter