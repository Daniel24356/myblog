  import { Link } from 'react-router-dom'
import '../style/home.css'
  function Home(){
     return (
        <>
        <div className='home-div'>
         <div>
        <div className='shoddy-cont'>
        <h1 className='shoddy-txt'>UNLOCKING THE BEAUTY OF SIMPLE</h1>
        <h1 className='shoddy-txt'>GEOMETRIC WALL PAINT: A GUIDE TO</h1>
        <h1 className='shoddy-txt'>EFFORTLESS DESIGN</h1>
        </div>
        <div className='field-cont'>
         <p className='field-txt'>In the field of interior design, simple geometric wall paint has now become a timeless and adaptable</p>
         <p className='field-txt'>choice. This approach involves creating appealing designs using basic shapes like squares,…</p>
        </div>
        <div className='read-cont'>
        <button className='read-btn'>
           <Link className='st-link' to='/login'>continue Reading</Link> 
         </button>
        </div>
         
         </div>
        </div>
      
        </>
     )
   }

   export default Home