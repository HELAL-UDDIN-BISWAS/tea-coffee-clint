import { Sidebar } from "keep-react";
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
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div>
                <Sidebar aria-label="Sidebar with multi-level dropdown example">
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={<SquaresFour size={24} />}>
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Collapse icon={<ShoppingCart size={24} />} label="E-commerce">
                            <Sidebar.Item href="dashboard" icon={<Handbag size={24} />}>
                                Products
                            </Sidebar.Item>
                        </Sidebar.Collapse>

                   <Sidebar.Item href="#" icon={<MdOutlineDeleteOutline size={24} />}>
                            Delete
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={<Users size={24} />}>
                            Users
                        </Sidebar.Item>
                        <Link to={"allprodect"}>
                        <Sidebar.Item href="#" icon={<ShoppingBagOpen size={24} />}>
                            Products
                        </Sidebar.Item>
                        </Link>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={<TreeStructure size={24} />}>
                            Project Plan
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={<ChartBar size={24} />}>
                            Our Progress
                        </Sidebar.Item>

                        <Sidebar.Item href="/" icon={<LockKey size={24} />}>
                            Home
                        </Sidebar.Item>

                    </Sidebar.ItemGroup>
                </Sidebar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;