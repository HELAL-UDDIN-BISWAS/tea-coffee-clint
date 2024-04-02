
const Comment = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
      console.log('hello world')
    }

    return (
        <div>
            <div>
                <form>
               <div className="w-full">
                        <label className='block mb-2'>
                            <span className='text-2xl  m-4'>Massage</span>
                        </label>
                        <input type="text" name='text' className="lg:w-[500px] md:w-96 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your Message' required />
                    </div>
                    <div className="items-center text-center justify-center mb-3">
                    <button onClick={handleSubmit} className=" hover:bg-[#225af2] bg-[#053cd9] py-2 rounded text-white px-4">Comment</button>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Comment;