    import '../style/header.css'
    import { IoIosArrowDown } from "react-icons/io";
    import { IoIosSearch } from "react-icons/io";
    // import { IoSearchOutline } from "react-icons/io5";
    import { IoMenuSharp } from "react-icons/io5";
    import { Link } from 'react-router-dom';
import DropDown from '../practice/dropdown';
import { useState } from 'react';


     function Header(){
        const [openProfile, setOpenProfile] = useState(false)
        return (
            <>
            <nav className='header'>
            <div>
            <li className='quite-txt'>QUITE LIGHT</li>
            </div>
            <div className='second-head'>
                <li>
                  <Link className='home-link' to='/'>Home</Link>     
                    <IoIosArrowDown className='arrow-down'/>
                </li>
                <li>Sport
                <IoIosArrowDown className='arrow-down'/>
                </li>
                <li>Travel
                <IoIosArrowDown className='arrow-down'/>
                </li>
                <li>Beauty
                <IoIosArrowDown className='arrow-down'/>
                </li>
                <li>Music
                <IoIosArrowDown className='arrow-down'/>
                </li>
                <li>Art
                <IoIosArrowDown className='arrow-down'/>
                </li>
                <li>Fashion
                <IoIosArrowDown className='arrow-down'/>
                </li>
                <li>Contact
                <IoIosArrowDown className='arrow-down'/>
                </li>
            </div>
            <div className='input-sec'>
            <IoIosSearch className='search'/>
            <Link to='search'>
            <input className='input-blog' type="search" placeholder='Search here' />
            </Link>
       
            </div>
            <div className='menu' onClick={() => setOpenProfile((prev) => !prev)}>
               <IoMenuSharp className='menu-icon'/>
               
            </div>
            {
                openProfile &&  <DropDown/>
               }
            </nav>
              
            </>
        )
     }

     export default Header
