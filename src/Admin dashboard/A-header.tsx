import '../style/A-header.css'
//    import { IoSunnyOutline } from "react-icons/io5";
//    import { IoMoonOutline } from "react-icons/io5";
//    import { IoNotificationsOutline } from "react-icons/io5";
//    import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import PSwitch from './P-switch';
import { useState } from 'react';

function AHeader() {

    const [isToggled, setToggled] = useState(false)

    return (
        <>
            <nav>
                <div className='A-nav'>
                    <div className='A-inputDiv'>
                        <input className='A-input' type="search" placeholder="search here" />
                        <IoIosSearch />
                    </div>
                    <div className='willows'>
                        <img src="willow-img.PNG" alt="" />
                        <p>WILLOW</p>
                    </div>
                    <div>
                        <div className='nav-inner'>
                            <PSwitch isToggled={isToggled} onToggle={() => setToggled(!isToggled)} />
                            {/* <PSwitch isToggled={theme === 'dark'} onToggle={toggleTheme}/> */}
                            {/* <div className='side-icon'>
                         <div className='A-iconsDiv'>
                            <IoSunnyOutline className='sun-icon'/>
                         </div>
                         <div className='A-iconsDivs'>
                            <IoMoonOutline className='A-Res'/>
                         </div>
                        </div>
                        <div className='A-iconsDivss'>
                            <IoNotificationsOutline className='A-Res'/>
                        </div>
                        </div> */}

                            <div className='admin-pro'>
                                <div>
                                    <img className='A-proimg' src="/profile.jpg" alt="" />
                                </div>
                                <div className='pro-div'>
                                    <p className='A-proname'>Zoe chuahun</p>
                                    <p className='A-pt'>Admin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

}

export default AHeader