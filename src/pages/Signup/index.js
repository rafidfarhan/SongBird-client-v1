import React from 'react';
import validate from '../../config/signupValidateInfo';
import useSignup from '../../config/useSignup';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';


import './Signup.css';

const Signup = () => {
    const { handleChange, handleSubmit, values, errors, apiError, signupSuccess } = useSignup(
        validate
      );

    return (
        <div className = 'signup'>
             <div className= "signup-body">

            
             {signupSuccess? (
                 <>
                  <div  className = "signup-success-wrap"> 
                    <div className = 'signup-success-inner-wrap'>
                            <div className = 'signup-success-icon-wrap' >
                                <DoneAllRoundedIcon className = 'signup-success-icon'/>
                            </div>
                            <div className = 'signup-success-message-wrap'>
                                <span className="signup-success-message">We have received your request!</span>
                            </div>
                    </div>
                  </div>
                      
                     
                 </>
                ):
                (
                    <div  className = "signup-form-wrap">
                
                <form  onSubmit = {handleSubmit} className = 'signup-form'>
                <span className="signup-form-title">Create an Account</span>
                    <div className='input-wrap-2'>
                        <label className='signup-label'>Username</label>
                        <input
                            className='input-100-2'
                            type='text'
                            name='username'
                            placeholder='Enter your username'
                            value={values.username}
                            onChange={handleChange}
                        />
                        {errors.username && <div className = 'errors-wrap'>
                            <ErrorOutlineRoundedIcon 
                            className = 'errors-icon'
                            />
                            <span className = 'errors'>{errors.username}</span>
                            </div>}
                    </div>
                    <div className='input-wrap-2'>
                        <label className='signup-label'>Email</label>
                        <input
                            className='input-100-2'
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <div className = 'errors-wrap'>
                            <ErrorOutlineRoundedIcon 
                            className = 'errors-icon'
                            />
                            <span className = 'errors'>{errors.email}</span>
                            </div>}
                    </div>
                    <div className='input-wrap-2'>
                        <label className='signup-label'>Password</label>
                        <input
                            className='input-100-2'
                            type='password'
                            name='password'
                            placeholder='Enter your password'
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <div className = 'errors-wrap'>
                            <ErrorOutlineRoundedIcon 
                            className = 'errors-icon'
                            />
                            <span className = 'errors'>{errors.password}</span>
                            </div>}
                    </div>
                    <div className='input-wrap-2'>
                        <label className='signup-label'>Confirm Password</label>
                        <input
                            className='input-100-2'
                            type='password'
                            name='password2'
                            placeholder='Confirm your password'
                            value={values.password2}
                            onChange={handleChange}
                        />
                         {errors.password2 && <div className = 'errors-wrap'>
                            <ErrorOutlineRoundedIcon 
                            className = 'errors-icon'
                            />
                            <span className = 'errors'>{errors.password2}</span>
                             </div>}
                    </div>
                    {apiError && <div className = 'errors-wrap'>
                        <ErrorOutlineRoundedIcon 
                        className = 'errors-icon'
                        />
                        <span className = 'errors'>{apiError}</span>
                        </div>}
                    <div className = 'm-t-10-percent button-wrap'>
                        <button className ="signup-form-button" type = 'submit'>Sign up</button>
                    </div>
                </form>
                </div>

                )}
               
               
                <div className ="side-banner-2"></div>
             </div>

        </div>
       
          
    )
}

export default Signup
