import { Link, Route } from "react-router-dom"
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Profile from "./Profile";

const SideNavbar = () => {
    const { currentUser, loading } = useContext(AuthContext);
    return (
        
        <div className=" fixed bg-coffee-1 border-coffee-5 shadow-lg rounded-lg h-2/3 border-r-4 border-b-4 z-30 w-[80vw]">
            <div className=" w-full h-[60%] mt-[8vh] grid grid-flow-row gap-y-2">
                <Link to='/' className="w-full text-center">Home</Link>
                <Link to='about' className="w-full text-center">About Us</Link>
                <a href="/#shop">
                    <p className="w-full text-center">Shop</p>
                </a>
                <a href="/#FAQ">
                    <p className="w-full text-center">FAQ</p>
                </a>
                <a href="/#findus">
                    <p className="w-full text-center">Find Us</p>
                </a>
                <p className="w-full text-center">Orders</p>
            </div>
            <div className=" w-full h-[25%]">
                {currentUser ? (
                    <Link to='profile' >
                <div className="w-full h-1/2 bg-glass flex">
                    <div className=" h-full basis-3/12 p-1">
                        <div className="bg-coffee-2 rounded-full h-full">
                            <img 
                                className="mx-auto h-full"
                                src="/assets/undraw_drink_coffee_v3au.svg" 
                                alt="" 
                            />
                        </div>
                    </div>
                        <div className="basis-9/12 pl-3 my-auto font-semibold ">
                            {currentUser?.displayName}
                        </div>
                    </div>
                    </Link>
                    )
                    :
                    (
                        <div className="w-full h-1/2 bg-glass ">
                            <Link to='profile' className="w-full h-full flex" >

                            <h1 className="m-auto text-center border-coffee-5 border-2 rounded-md shadow-md shadow-[#0e0e0e3b] font-semibold py-2 px-5 text-coffee-5" >
                            Login/Signup
                            </h1>
                            </Link>
                        </div>
                    )
                    }
                <div className="w-full h-1/2 bg-coffee-5 shadow-inner">
                    <div className="flex justify-center items-center gap-3">
                        <div className="h-12 w-12  p-2 mt-1">
                        <a href="https://www.instagram.com/the_coffee_place_india/" target="_blank" rel="noopener noreferrer">
                            <img className="" src="./assets/icons8-instagram-150.png" alt="" />
                        </a>
                        </div>
                        <div className="h-12 w-12  p-2 mt-1">
                        <a href="https://www.threads.net/@the_coffee_place_india" target="_blank" rel="noopener noreferrer">
                            <img className="" src="./assets/icons8-threads-144.png" alt="" />
                        </a>
                        </div>
                        <div className="h-12 w-12  p-2 mt-1">
                        <a href="https://m.facebook.com/profile.php/?id=61555386916506" target="_blank" rel="noopener noreferrer">
                            <img className="" src="./assets/icons8-facebook-150.png" alt="" />
                        </a>
                        </div>
                        <div className="h-12 w-12 p-2 mt-1">
                        <a href="https://www.youtube.com/@TheCoffeePlaceLtd." target="_blank" rel="noopener noreferrer">
                            <img className="" src="./assets/icons8-youtube-150.png" alt="" />
                        </a>
                        </div>
                        
                    
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNavbar