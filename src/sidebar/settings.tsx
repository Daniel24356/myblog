    import './setting.css'
    import { CiSearch } from "react-icons/ci";
    import { FaRegEnvelope } from "react-icons/fa";
    import { LuPlusCircle } from "react-icons/lu";
    import { GiPadlock } from "react-icons/gi";
    import { GoDotFill } from "react-icons/go";
    import { IoEyeOffOutline } from "react-icons/io5";

const Settings = () => {
    return(
        <>
        <div className='all-set'>
       <nav className='set-head'>
        <div className='div-put'>
            <CiSearch/>
        <input className='set-search' type="search" placeholder="Search" />
        </div>
        
       </nav>

       <div className='acc-sets'>
        <h4>Account</h4>
        <p>Real-time information and activities of your property</p>
       </div>

       <div>
        <div className='profile-up'>
            <div className='profile-b'>
                <img src="/profile.jpg" alt="" />
                <div>
                 <p className='pp-text'>Profile picture</p>
                 <p className='img-type'>PNG,JPEG under 15mb</p>
                </div>
            </div>
            <div className='btn-pro'>
                <button className='up-btn'>Upload new picture </button>
                <button className='del-btn'>Delete</button>
            </div>
        </div>

        <div className='name-div'>
            <p className='f-name'>Full name</p>
             <div className='name-box'>
                <div>
                    <p className='name-l'>First name</p>
                    <div className='name-iv'>
                    <input className='name-inputss' type="text"  placeholder='Igwe'/>
                    </div>
                    
                </div>
                <div>
                    <p className='name-l'>Last name</p>
                    <div className='name-iv'>
                    <input className='name-inputss' type="text" placeholder='Daniel' />
                    </div>
                 
                </div>
             </div>
        </div>
       </div>

       <div className='name-div'>
        <div>
        <p className='f-name'>Contact email</p>
        <p className='m-acct'>Manage your accounts email address for the invoices</p>
        </div>
        <div className='name-boxs'>
            <div>
                <p className='name-l'>Email</p>
                <div className='name-iv'>
                < FaRegEnvelope/>
                <input className='name-inputs'type="email" placeholder='example@gmail.com' />
                </div>
              
            </div>
            <div>
                
                <button className='btn-add'>
                <LuPlusCircle className='blue-i'/>
                    Add another email
                    </button>
            </div>
        </div>
       </div>

       <div className='name-div'>
        <div>
        <p className='f-name'>Password</p>  
        <p className='m-acct'>Modify your currrent password</p>
        </div>
        
        <div className='name-box'>
        <div>
            <p className='name-l'>Current password</p>
            <div className='name-iv'>
              <GiPadlock className='p-iconss'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
            <input className='name-inputs' type="text" />
            <IoEyeOffOutline className='p-icons'/>
            </div>
       
        </div>
         <div>
            <p className='name-l'>New password</p>
            <div className='name-iv'>
            <GiPadlock className='p-iconss'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
              <GoDotFill className='p-icons'/>
            <input className='name-inputs' type="text" />
            <IoEyeOffOutline className='p-icons'/>
            </div>
          
         </div>
        </div>
       
       </div>

       <div className='name-div'>
         <div>
            <p className='f-name'>Integrated account</p>
            <p className='m-acct'>Manage your current integrated accounts</p>
         </div>
         <div className='goo-ana'>
            <div className='google-div'>
                <div className='google-indiv'>
                    <img src="/mr beast profile.jpg" alt="" />
                    <div>
                        <p className='f-name'>Google analytics</p>
                        <p className='m-acct'>Navigate the Google Analytics interface and reports </p>
                    </div>
                </div>
                <div>
                    <button className='btn-connect'>Connected</button>
                </div>
            </div>

             <div className='google-div'>
                <div className='google-indiv'>
                    <img src="/Phanda.jpg" alt="" />
                    <div>
                        <p className='f-name'>Google analytics</p>
                        <p className='m-acct'>Navigate the Google Analytics interface and reports </p>
                    </div>
                </div>
                <div>
                    <button className='btn-connect'>Connected</button>
                </div>
            </div>
         </div>
       </div>
       </div>
        </>
    )
     
    
  }

  export default Settings 