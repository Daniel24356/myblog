import '../App.css'
import BlogSec from './blogSec'
import BlogThird from './blogThird'
import Footer from './footer'
import Header from './header'
import Home from './home'


  function HomeAll(){
    return(
        <>
    <div className='cont-app'>
    </div>

    <div className='cont-sec'>
    <Header/>
      <Home/>
    </div>
      <BlogSec/>
      <BlogThird/>
      <Footer/>
        </>
    )
  }

  export default HomeAll