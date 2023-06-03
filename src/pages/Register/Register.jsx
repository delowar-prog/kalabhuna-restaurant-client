import { Link, useNavigate } from 'react-router-dom'
import loginImg from '../../assets/others/authentication2.png'
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
   const navigate=useNavigate()
    const {registerUser, updateUserProfile, logoutUser}=useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        registerUser(data.email, data.password)
        .then(result=>{
            const loggedUser=result.user 
            console.log(loggedUser)
            updateUserProfile(data.name, data.photo)
            .then(()=>{
                const saveUser={name:data.name, email: data.email}
                fetch(`http://localhost:5000/users`, {
                    method:"POST",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(saveUser)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.insertedId){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Registration Completed',
                            showConfirmButton: false,
                            timer: 1000
                          })
                          logoutUser().then(()=>{
                            navigate('/login')
                        })
                    }
                }) 
            })
        })
        .catch(err=>console.log(err.message))
    };

  return (
    <div className="hero min-h-screen bg-gray-200 bgStyle">
            <div className="hero-content flex-col shadow-2xl p-20 border border-3 border-gray-300 lg:flex-row-reverse mx-14">
                <div className="text-center lg:text-left">
                    <img src={loginImg}></img>
                </div>
                <div className="card w-full max-w-sm shadow-2xl">
                    <h1 className='text-2xl font-bold text-center mb-5'>Sign Up</h1>
                    <form  onSubmit={handleSubmit(onSubmit)} className="card-body border-2 border-gary-300">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true, minLength: 5, maxLength: 20 })} placeholder="Name" className="input input-bordered" />
                            {errors.name?.type === 'required' && <p role="alert" className='text-red-500'>Name is required</p>}
                            {errors.name?.type === 'minLength' && <p role="alert" className='text-red-500'>Name is at least 5 characters</p>}
                            {errors.name?.type === 'maxLength' && <p role="alert" className='text-red-500'>Name is at most 20 characters</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} placeholder="Photo" className="input input-bordered" />
                            {errors.photo?.type === 'required' && <p role="alert" className='text-red-500'>Photo url filed is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email?.type === 'required' && <p role="alert" className='text-red-500'>Email filed is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 10 })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p role="alert" className='text-red-500'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p role="alert" className='text-red-500'>Password is at least 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p role="alert" className='text-red-500'>Password is at most 15 characters</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <p className='text-center'>Already have an account? <Link to='/login' className='text-info font-bold'>Login</Link> </p>
                    </form>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Register