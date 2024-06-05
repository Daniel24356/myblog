// SinglePost.tsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

const SinglePost= () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

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

  const handleDelete = async () => {
    try {
    const deleteResponse = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
   console.log(deleteResponse.data)
    // Redirect to home page or another page
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={handleDelete}>Delete Post</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/">Back to All Posts</Link>
    </div>
  );
};

export default SinglePost;
