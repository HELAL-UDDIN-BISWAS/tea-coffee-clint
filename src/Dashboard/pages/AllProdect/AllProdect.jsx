import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { SkeletonComponent } from "../../../Components/Skeleton/SkeletonComponent";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Proveider/Proveider";
import { useContext, useState } from "react";

import { Button, Modal } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
import { useForm } from "react-hook-form";
import axios from "axios";


const AllProdect = () => {
  const {user}=useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [showModalX, setShowModalX] = useState(false);
   const {refetch, isLoading, data:AllData } = useQuery({
        queryKey: [],
        queryFn: () => fetch('https://tea-coffee-server.vercel.app/allproducts')
            .then((res) => res.json())
    })
    const deleteData=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
            .then((result) => {
              if (result.isConfirmed) {
                fetch(`https://tea-coffee-server.vercel.app/deleteproduct/${id}`, {
                  method: "DELETE",
                })
                  .then(res => res.json())
                  .then(data => {
                    if (data.deletedCount > 0) {
                      refetch()
                      Swal.fire({
                        title: 'success',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'DELETE'
                      })
                    }
                  })
              }
            });
    }
    console.log(AllData)
    if(isLoading == true){
      <div>
        <SkeletonComponent></SkeletonComponent>
      </div>
    }
    // =-=-
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
         }}
         axios.put('')
    // =-=
    const onClickTwo = () => {
      setShowModalX(!showModalX);
  };
    return (
        <div className="p-2">
            <div className="max-w-screen-md mx-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Image</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Origin</th>
                            <th className="py-2 px-4 border-b">Price</th>
                            <th className="py-2 px-4 border-b">Flavor</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AllData?.map((datas)=><tr>
                              <Link to={`/detailsproduct/${datas._id}`}>
                            <td className="py-2 px-4 border-b"><img className="h-10 w-10 rounded" src={datas.image_url}></img></td></Link>
                            <td className="py-2 px-4 border-b">{datas.name}</td>
                            <td className="py-2 px-4 border-b">{datas.origin}</td>
                            <td className="py-2 px-4 border-b">{datas.price}</td>
                            <td className="py-2 px-4 border-b">{datas.flavor}</td>
                            <td className="py-2 px-4 border-b">
                                <button onClick={onClickTwo} className="text-blue-500">Edit</button>
                                <button onClick={()=>deleteData(datas._id)} className="text-red-500 ml-2">Delete</button>
                                <Modal
                        size='lg'
                        show={showModalX}
                        onClose={onClickTwo}
                    >
                        <Modal.Header>Do you want to upload this file?</Modal.Header>
                        <Modal.Body>
                            <div className="space-y-6">
                                <form className='' onSubmit={handleSubmit(onSubmit)}>
                                <div className=' grid md:grid-cols-2'>
                    <div className="">
                        <label className='block'>
                            <span>Type</span>
                        </label>
                        <input {...register('type')} type="text" className="bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Product Type' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Price</span>
                        </label>
                        <input type="text" {...register('price')} className="bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Price' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Origin</span>
                        </label>
                        <input type="text" {...register('origin')} className="bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Origin' required />
                    </div>

                    <div className="">
                        <label className='block'>
                            <span>Flavor</span>
                        </label>
                        <input type="text" {...register('flavor')} className="bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Flavor' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Caffeine Content</span>
                        </label>
                        <input type="text" {...register('caffeinecontent')} className="bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='caffeine_content' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Short Description</span>
                        </label>
                        <input type="text" {...register('shortdescription')} className="bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='short_description' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Product Name</span>
                        </label>
                        <input type="text" {...register('productname')} className="bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Product_Name' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Image</span>
                        </label>
                        <input {...register('photo')} type="file" required />
                    </div>                

                    <div className="w-full">
                        <label className='block'>
                            <span>Long Description</span>
                        </label>
                        <input type="text" {...register('longdescription')}  className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Long Description' required />
                    </div>     
                </div>
                
                <button className='bg-lime-100 text-lime-500 hover:text-white hover:bg-lime-600 py-2 px-3 rounded my-8'>Update Product</button>
                                </form>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                            </td>
                        </tr>)
                        }                   
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProdect;