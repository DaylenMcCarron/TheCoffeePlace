import { Link } from "react-router-dom"
import Newsletter from "./Newsletter"

const Footer = () => {
    return (
        <div className="  bg-coffee-5 h-[75vh] pb-5">
            <div className=" w-full h-full bg-gradient-to-b to-black via-black via-70% from-transparent">
                <Newsletter />
                <div className="flex justify-center items-center gap-4">
                    <div className="h-14 w-14 rounded-full p-2">
                        <a href="https://www.instagram.com/the_coffee_place_india/" target="_blank" rel="noopener noreferrer">
                            <img className="" src="./assets/icons8-instagram-150.png" alt="" />
                        </a>
                    </div>
                    <div className="h-14 w-14 rounded-full p-2">
                        <a href="https://www.threads.net/@the_coffee_place_india" target="_blank" rel="noopener noreferrer">
                            <img className="" src="./assets/icons8-threads-144.png" alt="" />
                        </a>
                    </div>
                    <div className="h-14 w-14 rounded-full p-2">
                        <a href="https://m.facebook.com/profile.php/?id=61555386916506" target="_blank" rel="noopener noreferrer">
                            <img className="" src="./assets/icons8-facebook-150.png" alt="" />
                        </a>
                    </div>
                    <div className="h-14 w-14 p-2">
                        <a href="https://www.youtube.com/@TheCoffeePlaceLtd." target="_blank" rel="noopener noreferrer">
                            <img className="" src="./assets/icons8-youtube-150.png" alt="" />
                        </a>
                    </div>
                 </div>
                <div className=" mt-8 text-white">
                    <h1 className="text-xl text-center pb-5">Quick Links</h1>
                    <div className="flex flex-wrap">
                        <div className="basis-1/2 text-center underline">
                            <Link to='/' className="w-full text-center">Home</Link>
                        </div>
                        <div className="basis-1/2 text-center underline">
                            <Link to='about' className="w-full text-center">About Us</Link>
                        </div>
                        <div className="basis-1/2 text-center underline">
                            <Link to='profile' className="w-full text-center">Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer