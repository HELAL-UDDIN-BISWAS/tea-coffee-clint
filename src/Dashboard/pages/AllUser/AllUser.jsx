import { useQuery } from "@tanstack/react-query";

const AllUser = () => {
    const { data: allUserData } = useQuery({
        queryKey: ["data"],
        queryFn: () => fetch("http://localhost:5000/alluser")
            .then(res => res.json())

    })
    console.log(allUserData)
    return (
        <div>
            <h3 className="text-end text-2xl py-4 text-black">Totle User: {allUserData?.length}</h3>
        <div className="p-2">
            <div className="max-w-screen-md mx-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Image</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Password</th>
                             <th className="py-2 px-4 border-b">Role</th>
                            <th className="py-2 px-4 border-b">Id</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUserData?.map((datas)=><tr key={datas._id}>
                            <td className="py-2 px-4 border-b"><img className="h-10 w-10 rounded" src={datas.userImage}></img></td>
                            <td className="py-2 px-4 border-b">{datas?.userName}</td>
                            <td className="py-2 px-4 border-b">{datas?.email}</td>
                            <td className="py-2 px-4 border-b">{datas.password}</td>
                            <td className="py-2 px-4 border-b">{datas.role}</td>
                            <td className="py-2 px-4 border-b">{datas._id}</td>
                            
                        </tr>)
                        }                   
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default AllUser;