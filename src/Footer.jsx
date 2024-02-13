import Newsletter from "./Newsletter"

const Footer = () => {
    return (
        <div className="  bg-coffee-5 h-[75vh] pb-5">
            <div className=" w-full h-full bg-gradient-to-b to-black via-black via-70% from-transparent">
                <Newsletter />
                <div className=" text-white">
                    Quick Links

                    link 1
                    link 2
                    link 3
                    link 4
                </div>
            </div>
            
        </div>
    )
}

export default Footer