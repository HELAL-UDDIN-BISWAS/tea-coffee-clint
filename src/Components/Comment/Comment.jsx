import { useContext } from "react";
import { AuthContext } from "../../Proveider/Proveider";
import axios from "axios";
import {
    useQuery
} from '@tanstack/react-query'

const Comment = ({ productData }) => {
    console.log(productData)
    const { user } = useContext(AuthContext);
    // console.log(user.photoURL)
        const { refetch, data: allcomment } = useQuery({
        queryKey: ['Data'],
        queryFn: () =>
            fetch('http://localhost:5000/allusercomment')
                    .then((res) => res.json())
                .catch(error => console.log(error))
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        const Message = event.target.comment.value;
        const commentData = {
            id: productData,
            photoURL: user?.photoURL,
            message: Message
        }
        axios.post('http://localhost:5000/usercomment', commentData)
            .then(res => {
                refetch()
                console.log(res)})
            .catch(error => console.error(error))
    }

    console.log(allcomment)
    const filterComment = allcomment?.filter((filterData) => filterData?.id == productData)
    console.log(filterComment)

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} >
                    <div className="w-full">
                        <label className='block mb-2'>
                            <span className='text-2xl  m-4'>Massage</span>
                        </label>
                        <div className="flex">
                            <img className="h-15 w-12" src={user?.photoURL} alt="" />
                            <input type="text" name='comment' className="lg:w-[500px] md:w-96 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your Message' required />

                        </div>
                    </div>

                    <div className="items-center text-center justify-center mb-1">
                        <button type="submit" className=" hover:bg-[#225af2] bg-[#053cd9] py-2 rounded text-white px-4">Comment</button>
                    </div>
                </form>
                <div>
                    {
                        filterComment?.map(data => <div className="flex items-center" key={data?._id}>
                            <img className="h-12 rounded-lg block w-12" src={data?.photoURL} alt="" />
                            <p className="text-3xl">{data?.message}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Comment;