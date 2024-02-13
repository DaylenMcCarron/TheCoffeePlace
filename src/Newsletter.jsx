
const Newsletter = () => {
    return (
        <div className=" w-full h-fit">
        <div className=" py-12 text-white ">
            <h1 className=" text-center mb-3 text-lg ">Subscribe to our Newsletter</h1>
            <div className=" flex bg-white m-2 h-[5vh]">

            <input type="email" className="basis-11/12 p-2 text-coffee-5" placeholder="example@gmail.com"/>
        </div>
        <input type="checkbox" className=" float-left mx-3 mt-1 "/>
        <p className=" text-sm text-coffee-2 px-2">By entering your email you agree to receive the 'The Coffee Place' newsletters. You can unsubscribe at any time.</p>
        <div className="  mx-auto w-full px-2 my-2">

                <button className=" bg-black mx-auto w-full p-2 "> Subscribe </button>
            </div>
        </div>
        </div>
    )
}

export default Newsletter