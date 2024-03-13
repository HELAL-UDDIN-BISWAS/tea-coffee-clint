import { useContext } from "react";
import { AuthContext } from "../../../Proveider/Proveider";


const User = () => {
    const {user}=useContext(AuthContext);
    console.log(user)
    return (
        <div className='flex items-center justify-center text-center max-w-4xl mx-auto'>
            <div>
           <img className="h-[200px] w-[200px]" src={user?.photoURL} alt="jkkk" />
           <p>Your Profile Name: {user?.displayName}</p>
            <p>Email: {user?.email}</p>
            </div>
            
        </div>
    );
};

export default User;