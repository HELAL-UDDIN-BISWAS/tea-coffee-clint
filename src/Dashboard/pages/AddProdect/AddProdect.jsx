import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddProdect = () => {
    const { register, handleSubmit } = useForm();
   const onSubmit=async(data)=>{
    const imageFile = new FormData();
        imageFile.append('image', data.photo[0]);
        console.log(imageFile)
        const {data: imageData} = await axios.post('https://api.imgbb.com/1/upload?key=b425eed4264500ee966fabfc8c973be7', imageFile)
        console.log(imageData)

        const postData={
            type: data.type,
            name:data.productname,
            origin: data.origin,
            flavor: data.flavor,
            caffeine_content: data.caffeinecontent,
            short_description: data.shortdescription,
            long_description: data.longdescription,
            price: data.price,
            image_url: imageData.data.display_url,
        }

      await axios.post('https://tea-coffee-server.vercel.app/addproduct',postData)
        .then(res=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(error=>console.error(error))
   console.log(postData)
   }
    return (
        <div className='  md:ml-10 m-4'>
           <form className=''  onSubmit={handleSubmit(onSubmit)}>
           <div className=' grid  md:grid-cols-2 gap-3'>
                    <div className="w-full">
                        <label className='block'>
                            <span>Type</span>
                        </label>
                        <input {...register('type')} type="text" className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Product Type' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Price</span>
                        </label>
                        <input type="text" {...register('price')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Price' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Origin</span>
                        </label>
                        <input type="text" {...register('origin')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Origin' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Flavor</span>
                        </label>
                        <input type="text" {...register('flavor')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Flavor' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Caffeine Content</span>
                        </label>
                        <input type="text" {...register('caffeinecontent')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='caffeine_content' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Short Description</span>
                        </label>
                        <input type="text" {...register('shortdescription')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='short_description' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Product Name</span>
                        </label>
                        <input type="text" {...register('productname')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Product_Name' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Image</span>
                        </label>
                        <input {...register('photo')} type="file" required />
                    </div>                

                    <div className="w-full">
                        <label className='block'>
                            <span>Product Name</span>
                        </label>
                        <input type="text" {...register('longdescription')}  className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Product_Name' required />
                    </div>     
                </div>
                
                <button>dfsdfd</button>
           </form>
        </div>
    );
};

export default AddProdect;