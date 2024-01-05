import React, { useContext } from 'react';
import { AuthContext } from '../../Proveider/Proveider';
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { Button } from "keep-react";
import axios from 'axios';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser,ubdateUser } = useContext(AuthContext);
    const { register, handleSubmit } = useForm()
    const onSubmit =async (data) => {
        const imageFile = new FormData();
        imageFile.append('image', data.photo[0]);
        console.log(imageFile)

        createUser(data.email, data.password)
            .then(async res => {
                console.log(res)
                const {data: imageData} = await axios.post('https://api.imgbb.com/1/upload?key=b425eed4264500ee966fabfc8c973be7', imageFile)
                ubdateUser(data.name, imageData.data.display_url)
                .then(res=>{

                })
                .catch(error=>{
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.onmouseenter = Swal.stopTimer;
                          toast.onmouseleave = Swal.resumeTimer;
                        }
                      });
                      Toast.fire({
                        icon: "success",
                        title: "Signed in successfully"
                      });
                    console.log(error)})
                console.log(imageData)
            })
            .catch(error => console.error(error))
    }

    return (
        <div className=' w-full h-[80vh] flex justify-center items-center mx-auto '>
            <div className='bg-white px-14 rounded py-10 drop-shadow-md hover:drop-shadow-xl'>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <div className=''>

                        <div className="w-full">
                            <label className='block'>
                                <span>Name</span>
                            </label>
                            <input type="text" {...register('name')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your Email' required />
                        </div>

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
                        <div className="w-full">
                            <label className='block'>
                                <span>Email</span>
                            </label>
                            <input type="file" {...register('photo')} required />
                        </div>

                    </div>
                    <button className="py-3 bg-primary-500 hover:bg-primary-600 text-white px-5 rounded my-2 w-full">SignUp</button>
                </form>
                <Button className='my-2 w-full ' size="md" color="success"><FcGoogle className='text-2xl' /></Button>
            </div>



        </div>
    );
};

export default SignUp;