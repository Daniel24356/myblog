import '../style/singleP.css'

// SinglePost.tsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import Comment from './comment';

interface Post {
  id: number;
  title: string;
  body: string;
}

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [blogs, setBlog] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [id]);

   
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('http://jsonplaceholder.typicode.com/posts?_start=0&_limit=5');
        setBlog(response.data);
        console.log(response.data);
             
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
      
    };
    fetchPosts();
  }, []);

  // const handleDelete = async () => {
  //   try {
  //     const deleteResponse = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  //     console.log(deleteResponse.data)
  //     // Redirect to home page or another page
  //   } catch (error) {
  //     console.error('Error deleting post:', error);
  //   }
  // };
      
  return (
    <>
    <div className='si-all'>
      <div className='head-single'>
        <Header />
      </div>

   <div className='single-all'>

     <div>
      <div>
       
   <div>
      {post ? (
        <div className='single-cont'>
        <img className='single-img' src="/spacejoy-Kh4tedFdHz4-unsplash.jpg" alt="" />
          <h1 className='single-header'>{post.title}</h1>
          <p className='ent-txt'>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>

       
      </div>

       <div className='single-conts'>
        <h1 className='single-headers'>Understanding the Concept of Textures of Paint</h1>
        <img className='single-img' src="/house2.webp" alt="" />
        <div>
         <p className='ent-txts'>Textures of paint are for creating varied surfaces that appear and feel distinct, contributing to the room's appeal. They provide depth and character through paint application beyond just even flat spaces. When you alter the thickness of the paint or utilize various tools, it's possible to create textures that are extremely sleek and subtle or quite edgy and prominent.</p>
        </div>
        <div className='ent-cont'>
        <p className='ent-txts'>This wall texture designing technique is crucial for enhancing wall appearances, providing a tactile sensation that contributes significantly to the overall ambiance of a space. Texture in paints brings an artistic touch, transforming plain walls into canvases for expressing creativity.</p>
        </div>
         
       </div>
         
       <div className='single-conts'>
        <h1 className='single-headers'>Different Types of Main Hall Wall Texture Designs</h1>
        <img className='single-img' src="/house3.webp" alt="" />
        <div>
          <h3>1. Metallic Finish Wall Texture Designs</h3>
          <p className='ent-txts'>Walls that have a metallic coat give your entry area a contemporary and luxurious feel. Nerolac’s Impressions Metallic Finish designs incorporate the reflective nature of metal-like paint, creating an interplay between light and shadow areas. The result is a space that looks very impressive and contemporary, and it can enhance the overall ambiance of your space.</p>
        </div>
        <div>
          <h3>2. Stucco Marble Wall Texture Designs</h3>
          <p className='ent-txts'>Drawing inspiration from the timeless charm of natural marble, stucco marble wall coatings reflect an air of elegance and sophistication. These decorative finishes replicate the intricate patterns and textures seen in marble, adding a classic and polished look to your main corridor. The blending of traditional practices with modern designs gives marble stucco textures a versatile quality, suitable for those desiring a sophisticated atmosphere.</p>
        </div>
        <div>
          <h3>3. Textured Embossed Wall Texture Designs</h3>
          <p className='ent-txts'>Walls that have raised patterns offer a variety of designs, such as intricate flower motifs and non-specific forms, allowing you to express your unique preferences and artistic flair through the textures on your walls. The elevated sections add depth and provide a tactile sensation, creating an appealing focal point in the main corridor of your home.</p>
        </div>
       </div>

       <div className='single-conts'>
        <h1 className='single-headers'>How to Choose the Right Wall Texture Designing for Your Home Entrance?</h1>
        <p className='ent-txts'>To select the appropriate textures of paint for your house's entry wall, you need to consider various factors, such as your preferred style, the overall architecture of your home, and the ambiance you aim to establish. If a contemporary look attracts you, metallic textures might be a good choice. On the other hand, if you desire something traditional with a luxurious touch, then patterns made of marble stucco could be fitting. Embossed patterns with textures are flexible and can be customized to fit your own design preferences</p>
       </div>
       </div>
       <div>

       </div>
       <div className='single-box'>
        <h2>More Related Blogs</h2>
          {blogs.map((blog) => (
            <div className="blog-cont">
              <div>
                <img className='blog-img' src="/spacejoy-Kh4tedFdHz4-unsplash.jpg" alt="" />
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
       </div>
        <Comment/>
   
      <Footer />
      </div>
    </>
  );
};

export default SinglePost;
