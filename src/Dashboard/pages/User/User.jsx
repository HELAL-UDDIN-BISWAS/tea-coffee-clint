import { useContext } from "react";
import { AuthContext } from "../../../Proveider/Proveider";


const User = () => {
    const {user}=useContext(AuthContext);
    console.log(user)
    return (
        <div className='flex bg-slate-400 items-center justify-center  max-w-4xl mx-auto'>
            <div className="p-4">
           <img className="h-[200px] w-[200px]" src={user?.photoURL} alt="jkkk" />
           <p>Your Profile Name: {user?.displayName}</p>
            <p>Email: {user?.email}</p>
            </div>
            
        </div>
    );
};

export default User;