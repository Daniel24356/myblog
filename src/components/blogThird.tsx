import '../style/blog.css'
import axios from "axios";
import { useEffect, useState } from "react";
// import Button from '../props/button';
import { Link } from 'react-router-dom';

interface IUser {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const BlogThird = () => {

    const [blogs, setBlogs] = useState<IUser[]>([]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3");
          console.log(response.data);

          const userData: IUser[] = response.data
          setBlogs(userData);
        } catch (error) {
          console.error("Error fetching user" + error);
        }
      }
      fetchUsers();
    }, []);

    return (
      <>
        <h1 className='blog-head'>Most Popular</h1>
        <div className='blog-box'>
          {blogs.map((blog) => (
            <div className="blog-cont">
              <div>
                <img className='blog-img' src="spacejoy-umAXneH4GhA-unsplash.jpg" alt="" />
              </div>
              <p className='art'>ART</p>
              <h3 className='blog-title'>{blog.title}</h3>
              <p className='blog-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, repudiandae?</p>
              <p className='see-more' key={blog.id}>
                 <Link to={`/posts/${blog.id}`}>see more</Link>
                </p>
            </div>
          ))}

        </div>
      </>
    )
  }


export default BlogThird