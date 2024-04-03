import { useContext } from "react";
import { AuthContext } from "../../Proveider/Proveider";
import axios from "axios";

const Comment = ({productData}) => {
    console.log(productData)
    const {user}=useContext(AuthContext);
    // console.log(user.photoURL)
    const handleSubmit=(event)=>{
        event.preventDefault();
        const Message=event.target.comment.value;
       const commentData={
        id:productData,
        photoURL: user?.photoURL,
        message:Message
       }
      axios.post('http://localhost:5000/usercomment',commentData)
      .then(res=>console.log(res))
      .catch(error=>console.error(error))
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} >
               <div className="w-full">
                        <label className='block mb-2'>
                            <span className='text-2xl  m-4'>Massage</span>
                        </label>
                        <input type="text" name='comment' className="lg:w-[500px] md:w-96 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your Message' required />
                    </div>
                      
                    <div className="items-center text-center justify-center mb-3">
                    <button type="submit" className=" hover:bg-[#225af2] bg-[#053cd9] py-2 rounded text-white px-4">Comment</button>   
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Comment;