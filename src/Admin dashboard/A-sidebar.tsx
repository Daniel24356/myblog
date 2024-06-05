    import '../style/A-sidebar.css'
    import { PiSquaresFourLight } from "react-icons/pi";
    import { MdOutlineAnalytics } from "react-icons/md";
    import { LiaFileInvoiceSolid } from "react-icons/lia";
    import { GrFormSchedule } from "react-icons/gr";
    import { SlCalender } from "react-icons/sl";
    import { FaRegEnvelope } from "react-icons/fa";
    import { IoSettingsOutline } from "react-icons/io5";
    import { IoIosLogOut } from "react-icons/io";
    
    // import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
    

   function ASidebar(){
     return(
        <>
        <div className='nested-sidebar'>

        <div className="sidebar">
            <div className='willow'>
                <img src="/willow-img.PNG" alt="" />
               <p>WILLOW</p>
            </div>
            <div className='A-active'>
                <PiSquaresFourLight className='Ad-icons'/>
               <Link className='lin-dash' to='halfdash'><p className='A-activess'>Dashboard</p></Link> 
            </div>
            <div className='Aside-indiv none'>
                <MdOutlineAnalytics className='A-icons'/>
                <Link className='link-ana' to='/form/analytics'>Analytics</Link>
                
            </div>
            <div className='Aside-indiv none'>
                <SlCalender className='A-icons'/>
                 <Link className='link-ana'  to='/form/calendar'>Calendar</Link>
            </div>
            <div className='Aside-indiv none'>
                <GrFormSchedule className='A-icons'/>
                <Link className='link-ana'  to='/form/schedule'>Schedule</Link>
            </div>
            <div className='Aside-indiv '>
            <LiaFileInvoiceSolid className='A-icons'/>
                 invoice
            </div>
            <div className='Aside-indiv'>
                <FaRegEnvelope className='A-icons'/>
                 Messages
            </div>
            <div className='Aside-indiv'>
                <IoSettingsOutline className='A-icons'/> 
                 <Link className='link-ana' to='/form/settings'>Settings</Link>
            </div>
            <div className='logout'>
                <IoIosLogOut className='A-icons'/>
                <p>Logout</p>
            </div>
        </div>

        {/* <div className='outlet'>
            <Outlet/>
        </div> */}
        </div>
        </>
     )
   }

   export default ASidebar