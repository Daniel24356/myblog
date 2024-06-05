import { SubmitHandler, useForm } from 'react-hook-form'
import Logo from './logo'
import '../style/login.css'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


interface UserLogin {
    email: string
    password: string
}

function Login() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<UserLogin>()
    const [loading, setLoading] = useState(false)
     
    const onSubmit: SubmitHandler<UserLogin> = async(data) => {
        console.log(data);

        setLoading(true)
        // console.log(registerData);
        
         try{
            const response = await axios.post('https://fakestoreapi.com/products', data)
         //    const response = await axios.post('https://fakestoreapi.com/products', loginData)
            console.log("The response", response.data.id);
            // console.log("The response", response.data.token);
            setLoading(true)
 
         //Save token
            localStorage.setItem("UserId", response.data.id)
            // localStorage.setItem("UserId", response.data.token)
            toast.success("User logged in successfully",{
             onClose:()=>navigate("/form")
             })
            setLoading(false)
         }
         catch(error){
            console.log(`Error in login ${error}`);
            toast.error("Login failed, invalid email or password")
            
         }
    }



    

    return (
        <>
        <div className='all-log'>
        <Logo/>
            <div className="login-div">
                <form className='form-login' onSubmit={handleSubmit(onSubmit)}>
                    <h3 className='login-txt'>Login</h3>
                    <div>
                        <p className='elog-txt'>Email </p>
                        <input className='user-login'
                            type="email"
                            placeholder="Type your email"
                            {
                            ...register('email', { required: "email is required" })
                            }
                        />
                        {
                            errors.email && (
                                <p className="error-red">{`${errors.email.message}`}</p>
                            )
                        }
                    </div>
                    <div className='pass-login'>
                        <p className='elog-txt'>Password</p>
                        <input className='user-login'
                            type="password"
                            placeholder="Type your password"
                            {
                            ...register('password', {
                                required: "password is required",
                                minLength: {
                                    value: 10,
                                    message: "password must be at least 10 characters"
                                }
                            })
                            }
                        />
                        {errors.password && <p className="error-red">{`${errors.password.message}`}</p>}
                    </div>
                    <p className='forgot-log'>Forgot password?</p>
                    <button className='login-btn' disabled={loading}>
                        {/* LOGIN */}
                        {loading ? 'Loading...':'LOGIN'}
                        </button>
                        <ToastContainer/>
                    <div className='icons-log'>
                        <p className='sign-using'>Or Sign Up Using</p>
                        <div className='los-div'>
                        <FaFacebook className='los-icons'/> 
                        <FaTwitter className='los-icons'/>
                        <FaInstagram className='los-icons'/>
                        </div>
                    </div>
                    <div className='sign-log'>
                        <p className='sign-using'>Or Sign Up Using</p>
                        <p>
                            <Link className='sign-down' to='/sign'>Sign Up</Link>
                            </p>
                    </div>
                </form>

            </div>
            </div>
        </>
    )
}

export default Login