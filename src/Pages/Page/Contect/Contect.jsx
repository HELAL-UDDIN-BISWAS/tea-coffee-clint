import React from 'react';

const Contect = () => {
    return (
        <div className="min-h-[60vh] flex mt-14 mb-20">

        <div className="md:flex gap-20 md:w-9/12 items-center justify-center p-3 mx-auto">
            <form ref={form} onSubmit={sendEmail} className="flex flex-1  flex-col space-y-5">
                <input required type="text" name="user_name" placeholder="Name" className="bordered input border rounded-full bg-slate-100 p-4  " />
                <input required type="email" name="user_email" placeholder="Email" className="bordered input border rounded-full bg-slate-100 p-4  " />
                <textarea required name="message" placeholder="Write your Message" className=" rounded-full bg-slate-100 p-4 h-20  "></textarea>
                <input type="submit" className="btn border rounded-full bg-slate-100 p-4  " />
            </form>
            <div className="flex-1 mt-10">
            <div>
                <h3 className="flex items-center text-gray-500 text-2xl gap-2"><MdEmail /> <p>mdhelal6775@gmail.com</p></h3>
                <h3 className="flex items-center text-gray-500 text-2xl gap-2"><FaPhone/><p>01858179115</p></h3>
             
                <div className="flex gap-2  text-white">
                    <Link className="m-4 text-xl bg-gray-500 rounded p-2"><FaFacebookF></FaFacebookF></Link>
                    <Link className="m-4 text-xl bg-gray-500 rounded p-2"><FaGoogle></FaGoogle></Link>
                    <Link className="m-4 text-xl bg-gray-500 rounded p-2"><FaGithub></FaGithub></Link>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
};

export default Contect;