// AllPosts.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
}

const AllPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
   
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

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPosts;
