import React from 'react';

const AddProdect = () => {
    return (
        <div className=' md:ml-10 m-4'>
           <form className=''>
           <div className=' grid  md:grid-cols-2 gap-3'>
                    <div className="w-full">
                        <label className='block'>
                            <span>Type</span>
                        </label>
                        <input type="text" className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Product Type' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Price</span>
                        </label>
                        <input type="password" className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Price' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Origin</span>
                        </label>
                        <input type="password" className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Origin' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Flavor</span>
                        </label>
                        <input type="password" className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Flavor' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Caffeine Content</span>
                        </label>
                        <input type="password" className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='caffeine_content' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Short Description</span>
                        </label>
                        <input type="password" className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='short_description' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Product Name</span>
                        </label>
                        <input type="password" className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Product_Name' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Image</span>
                        </label>
                        <input type="password" className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Product_Name' required />
                    </div>

                   
                </div>
                <textarea required name="message" placeholder="Write your Message" className=" rounded bg-slate-100 p-3 h-20 md:w-96 my-3"></textarea>
           </form>
        </div>
    );
};

export default AddProdect;