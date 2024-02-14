import { useState } from "react"
import SideNavbar from "./SideNavbar"
import Profile from "./Profile"

const Header = () => {
        const [sideNavActive,setSideNavActive] = useState(false)
        const [profileActive,setProfileActive] = useState(false)
        const [searchActive,setSearchActive] = useState(true)
        
    return( <>
        {
            profileActive ?
            <Profile /> 
            : null
        }
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
                    <img src="./assets/TCPText.png"  alt="" className="w-full h-full object-contain logo" />
                    :
                    <input className="w-full h-10/12 mt-1 rounded-full p-3" type="text" />
                }
            </div>

            <div className=" basis-[12%] flex items-center justify-center"  onClick={()=>setSearchActive(!searchActive)}>
            <span className="material-symbols-outlined text-coffee-1 text-3xl" >search</span>
            </div>

            <div className=" basis-[12%] flex items-center justify-center" onClick={()=>setProfileActive(!profileActive)}> 
            <span className="material-symbols-outlined  text-coffee-1 text-4xl">
                person
            </span>
            </div>
            <div className=" basis-[2%] flex items-center justify-center"> </div>
        </header>
        </>
    )
}

export default Header