import '../style/blog.css'
import axios from "axios";
import  { useEffect, useState } from "react";
import Button from '../props/button';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
}

const BlogSec = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  // const [currentPage,setCurrentPage] = useState(1);
  // const [postsPerAge, setPostsPerAge] = useState(6)
   
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('http://jsonplaceholder.typicode.com/posts?_start=0&_limit=6');
        setPosts(response.data);
        console.log(response.data);
             
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
      
    };
    fetchPosts();
  }, []);

//   const lastPostIndex = currentPage * postsPerAge;
//   const firstPostIndex = lastPostIndex - postsPerAge;
//  const currentPosts = posts.slice(firstPostIndex , lastPostIndex);

    return (
      <>
        <h1 className='blog-head'>Blogs</h1>
        <div className='blog-box'>
          {posts.map((post) => (
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
        <div className='pa-cont'>
          <div className='pagi-cont'>
  
              <Button label={<MdKeyboardDoubleArrowLeft/>} color='primary'/>
              <Button label={<MdKeyboardArrowLeft/>} color='primary'/>
                <Button label='1' color='primary'/>
                <Button label='2' color='primary'/>
                <Button label='3' color='primary'/>
                 <Button label='4' color='primary'/>
                  <Button label='5' color='primary'/>
                 <Button label='6' color='primary'/>
                   <Button label='7' color='primary'/>
                  <Button label='8' color='primary'/>
                 <Button label='9' color='primary'/>
                 <Button label={<MdKeyboardArrowRight/>} color='primary'/>
                  <Button label={<MdKeyboardDoubleArrowRight/>} color='primary'/>
          </div>
          </div>
      </>
    )
  }


export default BlogSec