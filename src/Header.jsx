import { useState } from "react"
import SideNavbar from "./SideNavbar"
import Profile from "./Profile"
import { Link } from "react-router-dom"


const Header = () => {
        const [sideNavActive,setSideNavActive] = useState(false)
        const [searchActive,setSearchActive] = useState(true)
        
    return( <>
        {sideNavActive ? 
        <SideNavbar />
        : null
        }
        <header className="flex h-[7vh] w-full backdrop-blur-sm fixed bg-header z-40 border-b-2 border-amber-950 shadow-lg">
            <div className=" basis-[15%] flex items-center justify-center" onClick={()=>setSideNavActive(!sideNavActive)}>
            <span className="material-symbols-outlined  text-coffee-1 text-3xl">
                side_navigation
            </span>
            </div>
            <div className=" basis-[5%] flex items-center justify-center"> </div>
            <div className=" basis-[56%] basis">
                {
                    searchActive ? 
                    <Link to='/'>
                        <img src="./assets/TCPText.png"  alt="" className="w-full h-full object-contain logo" />
                    </Link>
                    :
                    <input className="w-full h-10/12 mt-1 rounded-full p-3" type="text" />
                }
            </div>

            <div className=" basis-[12%] flex items-center justify-center"  onClick={()=>setSearchActive(!searchActive)}>
            <span className="material-symbols-outlined text-coffee-1 text-3xl" >search</span>
            </div>

            <div className=" basis-[12%] flex items-center justify-center"> 
            <Link to='profile'>
            <span className="material-symbols-outlined  text-coffee-1 text-4xl">
                person
            </span>
            </Link>
            </div>
            <div className=" basis-[2%] flex items-center justify-center"> </div>
        </header>
        </>
    )
}

export default Header