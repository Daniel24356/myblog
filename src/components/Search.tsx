import axios from 'axios';
import Logo from '../login/logo'
import '../style/Search.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";

interface Post {
    id: number;
    title: string;
  }

   const Search = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await axios.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
            console.log(response.data);
                 
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
          
        };
        fetchPosts();
      }, []);

    return(
        <>
      <nav  className='search-nav'>
        <div>
        {/* <Link to='/' className='q-links'> QUITE LIGHT</Link>    */}
        <Logo/>
        </div>
        <div className='s-box'>
            <IoIosSearch/>
            <input onChange={(e) => setSearch(e.target.value)} className='s-input' type="search" placeholder='Search here' />
        </div>
      </nav>
         
         <div>
         <div className='blog-boxs'>
          {posts.filter((item) => {
            return search.toLowerCase() === '' 
            ? item 
            : item.title.toLowerCase().includes(search) 
          }).map((post) => (
            <div className="blog-cont">
              <div>
                <img className='blog-img' src="spacejoy-Kh4tedFdHz4-unsplash.jpg" alt="" />
              </div>
              <p className='art'>ART</p>
              <h3 className='blog-title'>{post.title}</h3>
              <p className='blog-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, repudiandae?</p>
              <p className='see-more' key={post.id}>
                 <Link to={`/posts/${post.id}`}>see more</Link>
                </p>
            </div>  
           
          ))}
          
        </div>
         </div>
        </>
    )
   }

   export default Search