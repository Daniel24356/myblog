   import { IoIosSearch } from "react-icons/io";

  function DropDown(){
    return (
        <div className="drop-down">
            <ul>
                <li>home</li>
                <li>contact</li>
            </ul>
            <div className='input-secs'>
            <IoIosSearch className='search'/>
        <input className='input-blog' type="search" placeholder='Search here' />     
            </div>
        </div>
    )
  }

  export default DropDown