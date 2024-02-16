
const About = () => {

    return (
        <div className="z-20 h-fit pb-[20vh] ">
            <div className=" h-[70vh] w-screen bg-coffee-5 bg-gradient-to-b from-black to-[#00000096] pt-[10vh]">
                <h1 className=" text-white mt-[20%] text-2xl text-center px-5 font-bold">
                    We're on a mission to provide an enriched coffee experience no matter where you are 
                </h1>
                <img src="assets/The Coffee Place final.png" alt="" className=" w-1/2 mx-auto" />
            </div>
            <div className=" w-full h-fit bg-white overflow-y-scroll py-10">
                <p className="p-3 font-semibold text-center">
                At The Coffee Place, we believe in the transformative power of a good cup of coffee. Our journey began with a simple yet profound idea: to create a space where people could come together to savor exceptional coffee, engage in meaningful conversations, and forge lasting connections.
                </p>
                <p className="p-3 font-semibold text-center">
                At the heart of The Coffee Place is a commitment to quality and craftsmanship. We source our beans from ethically and sustainably grown coffee farms, ensuring that every cup you enjoy is not only delicious but also supports responsible and eco-friendly practices.
                Whether you prefer a classic espresso, a velvety latte, or a bold pour-over, our team takes pride in crafting each beverage with precision and care.
                </p>

            </div>
        </div>
    )
}

export default About