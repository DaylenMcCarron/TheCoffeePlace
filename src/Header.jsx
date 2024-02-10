
const Header = () => {
    return(
        <header className="flex h-[7vh] w-full backdrop-blur-sm fixed bg-header z-40">
            <div className=" basis-[15%] flex items-center justify-center">
            <span className="material-symbols-outlined  text-coffee-1 text-3xl">
                side_navigation
            </span>
            </div>
            <div className=" basis-[5%] flex items-center justify-center"> </div>
            <div className=" basis-[56%] basis">
                <img src="./src/assets/TCPText.png"  alt="" className="w-full h-full object-contain logo" />
            </div>

            <div className=" basis-[12%] flex items-center justify-center">
            <span className="material-symbols-outlined text-coffee-1 text-3xl" >search</span>
            </div>

            <div className=" basis-[12%] flex items-center justify-center"> 
            <span className="material-symbols-outlined  text-coffee-1 text-4xl">
                person
            </span>
            </div>
            <div className=" basis-[2%] flex items-center justify-center"> </div>
        </header>
    )
}

export default Header