import { useContext, useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png'
import './Login.css'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
    const {loginUserWithPass}=useContext(AuthContext)
    const navigate=useNavigate()
    const captchaRef=useRef(null)
    const [disabled, setDisabled]=useState(true)
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

    const handleLogin=(event)=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        loginUserWithPass(email,password)
        .then(result=>{
            const loggedUser=result.user;
            return navigate('/')
        })
    }

    const handleCaptcha=()=>{
            const user_captcha_value=captchaRef.current.value
            if(validateCaptcha(user_captcha_value)){
                setDisabled(false)
            }else{
                console.log('Captcha Does Not Match')
            }
    }
    return (
        <div className="hero min-h-screen bg-gray-200 bgStyle">
            <div className="hero-content flex-col shadow-2xl p-20 border border-3 border-gray-300 lg:flex-row mx-14">
                <div className="text-center lg:text-left">
                    <img src={loginImg}></img>
                </div>
                <div className="card w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"><LoadCanvasTemplate/></span>
                            </label>
                            <input type="text" onBlur={handleCaptcha} ref={captchaRef} placeholder="Type the above captcha" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-center'>Click to create an account? <Link to='/register' className='text-info font-bold'>Sign Up</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login