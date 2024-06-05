import { useEffect, useState } from 'react';
import '../style/comment.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentSec from './commentSec';

interface Post {
    id: number;
    body: string;
    email:string;
}


function Comment() {

    const { id } = useParams();
    const [posts, setPosts] = useState<Post[]>([]);
   
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get<Post[]>(`http://jsonplaceholder.typicode.com/posts/${id}/comments`);
          setPosts(response.data);
          console.log(response.data);
               
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
        
      };
      fetchPosts();
    }, [id]);
  



    return (
        <>
            <div className='comment-cont'>
                <h1>Comments Section</h1>
                <div className='comment-sec'>
                  
                    {posts.map((post) => (
                          <div className='comment-indiv'>
                            <div className='user-com'>
                              <div>
                              <img src="/profile.jpg" alt="" />
                              </div>
                              <div>
                              <h3 className='name-com'>{post.email}</h3>
                              <p className='date-com'>January 11,2021 at 9:11am</p>
                              </div>
                            </div>
                        
                          <div className='body-cont'>
                              <p className='post-body'>{post.body}</p>
                          </div>

                      </div>

                    ))}
                </div>
               <CommentSec/>
            </div>
        </>
    )
}

export default Comment