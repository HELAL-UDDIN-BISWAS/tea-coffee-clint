import { useContext } from "react";
import { AuthContext } from "../../../Proveider/Proveider";


const User = () => {
    const {user}=useContext(AuthContext);
    console.log(user)
    return (
        <div className='flex shadow-lg rounded shadow-black mt-4 items-center justify-center  max-w-4xl mx-auto'>
            <div className="p-4">
           <img className="h-[150px] w-[150px] mx-auto my-4" src={user?.photoURL} alt="jkkk" />
           <p>Your Profile Name: {user?.displayName}</p>
            <p>Email: {user?.email}</p>
            </div>
            
        </div>
    );
};

export default User;