import React from 'react';
import './Signup.css';

const Signup = () => {
    return (
        <div className = 'signup'>
             <div className= "signup-body">
                <div  className = "signup-form-wrap">
                
                <form className = 'signup-form'>
                <span className="signup-form-title">Create an Account</span>
                    <div className='input-wrap-2'>
                        <label className='signup-label'>Username</label>
                        <input
                            className='input-100-2'
                            type='text'
                            name='username'
                            placeholder='Enter your username'
                            // value={values.username}
                            // onChange={handleChange}
                        />
                    </div>
                    <div className='input-wrap-2'>
                        <label className='signup-label'>Email</label>
                        <input
                            className='input-100-2'
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            // value={values.username}
                            // onChange={handleChange}
                        />
                    </div>
                    <div className='input-wrap-2'>
                        <label className='signup-label'>Password</label>
                        <input
                            className='input-100-2'
                            type='password'
                            name='password'
                            placeholder='Enter your password'
                            // value={values.password}
                            // onChange={handleChange}
                        />
                    </div>
                    <div className='input-wrap-2'>
                        <label className='signup-label'>Confirm Password</label>
                        <input
                            className='input-100-2'
                            type='password'
                            name='password2'
                            placeholder='Confirm your password'
                            // value={values.password2}
                            // onChange={handleChange}
                        />
                    </div>
                    <div className = 'm-t-10-percent button-wrap'>
                        <button className ="signup-form-button" type = 'submit'>Sign up</button>
                    </div>
                </form>
                </div>
                <div className ="side-banner-2"></div>
             </div>

        </div>
       
          
    )
}

export default Signup
