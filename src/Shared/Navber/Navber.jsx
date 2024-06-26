// import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button, Avatar } from "keep-react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Proveider/Proveider";
import { GiSelfLove } from "react-icons/gi";
import Swal from "sweetalert2";
import allCartData from "../../Components/CartData/allCartData";

const Navber = () => {
  // const [refetch,isLoading,cartDatas]=allCartData();
  const { user, logout } = useContext(AuthContext)
  const handlelogout = () => {
    logout()
      .then(res => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error => console.error(error))
  }


  // const userCartData =cartDatas?.filter(data=>data?.email === user?.email)
  const navlink = <>
    <NavLink to="/" className={({ isActive, isPending }) =>
      isPending ? "" : isActive ? "bg-gray-500 text-white py-2 px-4 rounded" : "text-black"
    }
    >
      Home
    </NavLink>
    <NavLink to="/prodects" className={({ isActive, isPending }) =>
      isPending ? "" : isActive ? "bg-gray-500 text-white py-2 px-4 rounded" : "text-black"
    }
    >
      Products
    </NavLink>
    <NavLink to="/contect" className={({ isActive, isPending }) =>
      isPending ? "" : isActive ? "bg-gray-500 text-white py-2 px-4 rounded" : "text-black"
    }
    >
      Contect
    </NavLink>
    <NavLink to="/dashboard" className={({ isActive, isPending }) =>
      isPending ? "" : isActive ? "bg-gray-500 text-white py-2 px-4 rounded" : "text-black"
    }
    >
      Dashboard
    </NavLink>
  </>

  return (
    <div className="sticky top-0 z-20 shadow-slate-700 shadow mb-5">
      <Navbar fluid={true}>
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Container className="flex items-center">
            <Navbar.Brand>
              <Link to={"/"}>
              <h2 className="text-xl hover:cursor-pointer"><span className="text-green-400 text-2xl">T</span>OP<span className="text-orange-600">T</span>EA</h2>
              </Link>
              {/* <img
                src={Banner}
                alt="keep"
                width="100"
                height="40"
              /> */}
            </Navbar.Brand>
            <Navbar.Divider></Navbar.Divider>
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-8"
            >
              {
                navlink
              }
            </Navbar.Container>
            <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
                {
                  navlink
                }
              </Navbar.Container>
            </Navbar.Collapse>
          </Navbar.Container>

          <Navbar.Container className="flex gap-2">
            <Button size="sm" type="link">
            </Button>
            {
              user ? <>
                <div className="flex items-center gap-3">
                  <Avatar
                    shape="circle"
                    size="md"
                    stacked={true}
                    img={user.photoURL}
                  />
                  <Button onClick={handlelogout} size="sm" type="primary">LogOut
                  </Button>
              
                  <Link to={'/addtocart'}>
                    <div className="relative">
                    <h3 className="text-3xl hover:cursor-pointer text-red-500"> <GiSelfLove /></h3>
                    {/* <p className="absolute text-[12px] text-white top-0 left-6 rounded-full w-3 text-center bg-red-400">{userCartData?.length}</p> */}
                    </div>          
                  </Link>
                
                  
                </div>
              </> : <><Link to='/login'><Button size="sm" type="primary">Login
              </Button></Link>
                <Link to='/signup'><Button size="sm" type="primary">SignUp
                </Button></Link></>
            }

            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};

export default Navber;