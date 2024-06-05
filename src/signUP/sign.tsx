import { SubmitHandler, useForm } from 'react-hook-form';
import Logo from '../login/logo';
import '../style/sign.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'

interface UserLogin {
    email: string
    fullname:string
    username:string
    password: string
    confirmPassword: string
}

function Sign() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<UserLogin>();

    const onSubmit:SubmitHandler<UserLogin> = async (data:any ) => {

        // await new Promise((resolve) => setTimeout(resolve, 1000))
          console.log(data)

          
         try{
            const response = await axios.post('https://fakestoreapi.com/products', data)
            console.log("The response", response.data);

            Swal.fire({
                title: "Sucessful!",
                text: "You have succesfully registered",
                icon: "success"
              });
            // Add sweet alert for succesfully added
            
         }
         catch(error){
            console.log(`error in fetching data ${error}`);

            Swal.fire({
                title: "Error!",
                text: "There has been an error in registering!",
                icon: "error"
              });
            // Add sweet alert for error
         }
    }

    return (
        <>
            
            <div className='all-sign'>
            <Logo/>
            <div className='sign-cont'>
                <form className='sign-form' onSubmit={handleSubmit(onSubmit)} >
                    <h1 className='sign-text'>Sign Up</h1>
                    <div className='input-house'>
                        <p className='input-txt'>Full Name</p>
                        <input className='sign-input'
                         type="text"
                         placeholder="Name_"
                         {
                            ...register('fullname', {
                                required: "fullname is required",
                                minLength: {
                                    value: 7,
                                    message: "Your fullname must be at least 7 characters"
                                }
                            })
                            }
                           />
                     {errors.fullname && <p className="red-error">{`${errors.fullname.message}`}</p>}
                    </div>
                    <div className='input-house'>
                        <p className='input-txt'>Email</p>
                        <input className='sign-input'
                         type="email" 
                         placeholder="Email address_" 
                         id='email'
                         {
                            ...register('email', { required: "email is required" })
                         }
                          />
                       {
                            errors.email && (
                                <p className="red-error">{`${errors.email.message}`}</p>
                            )
                        }
                    </div>
                    <div className='input-house'>
                        <p className='input-txt'>Username</p>
                        <input className='sign-input' 
                        type="text" 
                        placeholder="Username" 
                        {
                            ...register('username', {
                                required: "username is required",
                                minLength: {
                                    value: 4,
                                    message: "username must be at least 4 characters"
                                }
                            })
                            }
                        />
                      {errors.username && <p className="red-error">{`${errors.username.message}`}</p>}
                    </div>
                    <div className='input-house'>
                        <p className='input-txt'>Password</p>
                        <input className='sign-input' 
                        type="password" 
                        placeholder="************"
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
                        {errors.password && <p className="red-error">{`${errors.password.message}`}</p>}
                    </div>
                    <div className='input-house'>
                        <p className='input-txt'>Confirm Password</p>
                        <input className='sign-input'
                         type="password" 
                         placeholder="************" 
                         {
                            ...register('confirmPassword', {
                                required: "ConfirmPassword is required",
                                validate: (value) =>
                                    value === getValues('password') || "password must match",
                            })
                            }
                         />
                         {errors.confirmPassword && <p className="red-error">{`${errors.confirmPassword.message}`}</p>}
                    </div>
                    <div className='agree-cont'>
                        <input type="checkbox" />
                        <p className='agree-txt'>I agree to the Terms of User</p>
                    </div>

                    <div className='btn-cont'>
                        <button className='signup-btn'>Sign Up</button>
                        <button className='signin-btn'>
                          <Link className='in-link' to='/login'> Sign in</Link> 
                            </button>
                    </div>
                </form>

            </div>
            </div>

        </>
    )
}
export default Sign