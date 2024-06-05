import { Outlet } from 'react-router-dom'
import ASidebar from './A-sidebar'
import HalfDash from './adminDash'
import '../App.css'


     function ADashBoard(){
          return (
            <>
    <div className='admin-all' >
    <div>
      <ASidebar/>
    </div>
    <div>
    <Outlet/>
      
    </div>
    <div >
    <HalfDash/>
    </div>
   
      {/* <HalfDash/> */}
    </div>
            </>
          )
     } 

     export default ADashBoard