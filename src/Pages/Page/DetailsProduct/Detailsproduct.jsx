import { useLoaderData } from "react-router-dom";
import { GrShop } from "react-icons/gr";
import { useContext, useState } from "react";
import { Button, Modal } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Proveider/Proveider";



const Detailsproduct = () => {
    const {user}=useContext(AuthContext);
    const productData = useLoaderData();
    const { register, handleSubmit } = useForm();
    const [showModalX, setShowModalX] = useState(false);

    const onSubmit = async (data) => {
        const userData = {
            image: productData?.image_url,
            type: productData?.type,
            price: productData?.price,
            flavor: productData.flavor,
            userName: data.name,
            userEmail: user?.email,
            location: data.location,
            age: data.age
        }
        axios.post("http://localhost:5000/adduserproduct",userData)
        .then(res=>{
            if(res.data.acknowledged == true){
                console.log('Hello World', userData)
                axios.post("http://localhost:5000/allpurchaseproduct",userData)
                .then(res=>{
                    if(res.data.acknowledged == true){
                        console.log(res)
                        Swal.fire({
                            icon: "success",
                            title: "Oops...",
                            text: "Something went wrong!",
                            footer: '<a href="#">Why do I have this issue?</a>'
                          });
                    }
                })
                .catch(error=>{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                      });
                })
            }
            console.log(res)})
        .catch(error=>console.log(error))


        setShowModalX(!showModalX);
    }
    const onClickTwo = () => {
        setShowModalX(!showModalX);
    };
    return (
        <div className="max-w-6xl mx-auto">
            <div className="md:flex">
                <div className="flex-1">
                    <img className="rounded" src={productData.image_url} alt="" />
                </div>
                <div className="flex-1 ml-10">
                    <p className="text-2xl text-slate-600 ">Type: <span className="text-black">{productData.type}</span></p>
                    <p className="text-2xl text-slate-600">Flavor: <span className="text-black">{productData.flavor}</span></p>
                    <p className="text-2xl text-slate-600">Caffeine Content: <span className="text-black">{productData.caffeine_content}</span></p>
                    <h3 className="text-2xl text-slate-600">Price: <span className="text-black">{productData.price}</span></h3>

                    {/* <button className=" hover:bg-slate-400 bg-slate-300 py-2 px-4 rounded">BY NOW</button> */}
                    <Button className="items-center justify-center my-8" onClick={onClickTwo} size="md" color="success"><GrShop className="mx-1 items-center" />BY NOW</Button>
                    <Modal
                        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
                        size="md"
                        show={showModalX}
                        onClose={onClickTwo}
                    >
                        <Modal.Header>Do you want to upload this file?</Modal.Header>
                        <Modal.Body>
                            <div className="space-y-6">
                                <form className='' onSubmit={handleSubmit(onSubmit)}>
                                    <div className=''>

                                        <div className="w-full">
                                            <label className='block'>
                                                <span>Name</span>
                                            </label>
                                            <input type="text" {...register('name')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your Name' required />
                                        </div>

                                         <div className="w-full">
                                            <label className='block'>
                                                <span>Locaton</span>
                                            </label>
                                            <input type="text" {...register('location')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your Location' required />
                                        </div>
                                        <div className="w-full">
                                            <label className='block'>
                                                <span>Age</span>
                                            </label>
                                            <input type="number" {...register('age')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your Age' required />
                                        </div>


                                    </div>
                                    <button className="py-3 bg-primary-500 hover:bg-primary-600 text-white px-5 rounded my-2 w-full">SignUp</button>
                                </form>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <div className="">
                <h2 className="text-2xl py-5">{productData?.short_description}</h2>
                <p className="max-w-4xl ">{productData?.long_description}</p>
                deta
            </div>

        </div>
    );
};

export default Detailsproduct;