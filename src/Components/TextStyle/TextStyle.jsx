import React from 'react';

const TextStyle = ({pragraph,hading}) => {
    return (
        <div className='text-center my-5'>
            <h3 className='text-2xl my-1'>--{pragraph}--</h3>
            <hr className='w-52 mx-auto my-1'/>
            <h2>{hading}</h2>
            <hr className='w-52 mx-auto my-1'/>        
        </div>
    );
};

export default TextStyle;