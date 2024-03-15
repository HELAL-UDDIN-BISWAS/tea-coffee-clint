import { Button } from 'keep-react';
import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Proveider/Proveider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {loginuser}=useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
        const { register, handleSubmit } = useForm();
    const onSubmit =async (data) => {
          loginuser(data.email,data.password)
          .then(res=>{
            Swal.fire({
                icon: "success",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
              navigate(from, { replace: true })
            console.log(res)})
            .catch(error=>{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
                console.error(error)})
    }
    const from = location.state?.from?.pathname || '/';

    return (
        <div className=' w-full h-[80vh] flex justify-center items-center mx-auto '>
        <div className='bg-white px-14 rounded py-10 drop-shadow-md hover:drop-shadow-xl'>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <div className=''>
                    <div className="w-full">
                        <label className='block'>
                            <span>Email</span>
                        </label>
                        <input type="email" {...register('email')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your Email' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Password</span>
                        </label>
                        <input type="password" {...register('password')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your Email' required />
                    </div>
                </div>
                <button className="py-3 bg-primary-500 hover:bg-primary-600 text-white px-5 rounded my-2 w-full">SignUp</button>
            </form>
            <Button className='my-2 w-full ' size="md" color="success"><FcGoogle className='text-2xl' /></Button>
        </div>
    </div>
    );
};

export default Login;