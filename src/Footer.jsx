import Newsletter from "./Newsletter"

const Footer = () => {
    return (
        <div className="  bg-coffee-5 h-[75vh] pb-5">
            <div className=" w-full h-full bg-gradient-to-b to-black via-black via-70% from-transparent">
                <Newsletter />
                <div className="flex justify-center items-center gap-4">
                    <div className="h-14 w-14 rounded-full p-2">
                        <img className="" src="./assets/icons8-instagram-150.png" alt="" />
                    </div>
                    <div className="h-14 w-14 rounded-full p-2">
                        {/* Your icon component or image here */}
                        <img className="" src="./assets/icons8-threads-144.png" alt="" />
                    </div>
                    <div className="h-14 w-14 rounded-full p-2">
                        {/* Your icon component or image here */}
                        <img className="" src="./assets/icons8-facebook-150.png" alt="" />
                    </div>
                    <div className="h-14 w-14 p-2">
                        {/* Your icon component or image here */}
                        <img className="" src="./assets/icons8-youtube-150.png" alt="" />
                    </div>
                 </div>
                <div className=" mt-8 text-white">
                    <h1 className="text-xl text-center pb-5">Quick Links</h1>
                    <div className="flex flex-wrap">
                        <div className="basis-1/2 text-center underline">Link 1</div>
                        <div className="basis-1/2 text-center underline">Link 2</div>
                        <div className="basis-1/2 text-center underline">Link 3</div>
                        <div className="basis-1/2 text-center underline">Link 4</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer