import { Link } from "react-router-dom"

const SideNavbar = () => {
    return (
        <div className=" fixed bg-coffee-1 border-coffee-5 shadow-lg rounded-lg h-2/3 border-r-4 border-b-4 z-30 w-[80vw]">
            <div className=" w-full h-[60%] mt-[8vh] grid grid-flow-row gap-y-2">
                <Link to='/' className="w-full text-center">Home</Link>
                <Link to='about' className="w-full text-center">About Us</Link>
                <p className="w-full text-center">Shop</p>
                <p className="w-full text-center">FAQ</p>
                <p className="w-full text-center">Find Us</p>
                <p className="w-full text-center">Orders</p>
            </div>
            <div className=" w-full h-[25%]">
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
                    <div className="basis-9/12 pl-3 my-auto font-semibold">
                        Donatus. N
                    </div>
                </div>
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