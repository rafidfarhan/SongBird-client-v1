import React from 'react'

import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import {Link} from "react-router-dom";

import './ForgotPass.css'

const ForgotPass = () => {
    return (
        <div className = 'forgot-pass'>
            <div className= "forgot-pass-body">
                <div className = 'forgot-pass-form-wrap'>
                    <form className = 'forgot-pass-form'>
                    <div className = 'signup-success-icon-wrap' >
                        <VpnKeyRoundedIcon className = 'signup-success-icon'/>
                    </div>
                    <span className="forgot-pass-form-title">Forgot your password?</span>
                    <p>Enter your email and we will send you a link to reset your password.</p>
                    <div className='input-wrap-2'>
                        <label className='signup-label'>Email</label>
                        <input
                            className='input-100-2'
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            // value={values.email}
                            // onChange={handleChange}
                        />
                        {/* {errors.email && <div className = 'errors-wrap'>
                            <ErrorOutlineRoundedIcon 
                            className = 'errors-icon'
                            />
                            <span className = 'errors'>{errors.email}</span>
                            </div>} */}
                    </div>
                    <div className = 'm-t-10-percent button-wrap'>
                        <button className ="signup-form-button" type = 'submit'>Sign up</button>
                    </div>
                    <Link to = "/">
                    
                        <p className="txt3">
                        <KeyboardArrowLeftRoundedIcon/>
                            Back to Login</p>
                    </Link>
                    </form>
                </div>
                <div className ="forgot-pass-side-banner"></div>
            </div>
        </div>
                
    )
}

export default ForgotPass
