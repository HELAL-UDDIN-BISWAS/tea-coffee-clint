import { Sidebar } from "keep-react";
import { BiSolidBookAdd } from "react-icons/bi";
import {
    ChartBar,
    Chat,
    Handbag,
    LockKey,
    ShoppingBagOpen,
    ShoppingCart,
    SquaresFour,
    TreeStructure,
    Users,
} from "phosphor-react";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="fixed z-10 shadow-lg shadow-black h-[100vh]">
                <Sidebar aria-label="Sidebar with multi-level dropdown example">
                    <Sidebar.ItemGroup>
                        <Link to={""}>
                            <Sidebar.Item href="#" icon={<SquaresFour size={24} />}>
                                Dashboard
                            </Sidebar.Item>
                        </Link>
                        {/* <Sidebar.Item href="#" icon={<TreeStructure size={24} />}>
                            Project Plan
                        </Sidebar.Item> */}
                        <Link to={"addproduct"}>
                            <Sidebar.Item href="#" icon={<BiSolidBookAdd size={24} />}>
                                Add Product
                            </Sidebar.Item>
                        </Link>
                        <Link to={"alluser"}>
                            <Sidebar.Item href="#" icon={<Users size={24} />}>
                                All Users
                            </Sidebar.Item>
                        </Link>
                        <Link to={"allprodect"}>
                            <Sidebar.Item href="#" icon={<ShoppingBagOpen size={24} />}>
                                Products
                            </Sidebar.Item>
                        </Link>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Link to={"user"}>
                            <Sidebar.Item href="#" icon={<CiUser size={24} />}>
                                User
                            </Sidebar.Item>
                        </Link>
                        <Link to={"perchesproduct"}>
                            <Sidebar.Item icon={<ChartBar size={24} />}>
                                Perches Product
                            </Sidebar.Item>
                        </Link>
                        <Sidebar.Item href="/" icon={<IoHomeOutline size={24} />}>
                            Home
                        </Sidebar.Item>

                    </Sidebar.ItemGroup>
                </Sidebar>
            </div>
            <div className="absolute left-56 items-center justify-center">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;