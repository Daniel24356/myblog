import axios from "axios"
import { ChangeEvent, FormEvent, useState } from "react"
import { useParams } from "react-router-dom";

     
     interface IComment{
        comment:string
     }

     function CommentSec(){
        const { id } = useParams();
        const [commentData, setCommentData] = useState<IComment>({
            comment:''
        })
    
        const handleInputChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const {name, value} = e.target
            setCommentData((prevData)=>({...prevData, [name]:value}))
        }
        
        const handleSubmit = async (e:FormEvent) => {
            e.preventDefault()
           console.log(commentData);
           
            try{
               const response = await axios.post(`http://jsonplaceholder.typicode.com/posts/${id}/comments`, commentData)
               console.log("The response", response.data);
               // Add sweet alert for succesfully added
               
            }
            catch(error){
               console.log(`error in fetching data ${error}`);
               // Add sweet alert for error
            }
       }

        return(
            <>
            <form onSubmit={handleSubmit}>
            <div className='input-com'>
                    <input placeholder='Comment' type="text" value={commentData.comment} onChange={handleInputChange} name="comment" />
                    <button>Add</button>
                </div>
            </form>
            
            </>
        )
     }
     export default CommentSec