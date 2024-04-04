import ReviewCard from "./ReviewCard"


const Reviews = () => {
    return (
        <div id="Reviews" className=" h-fit w-full pb-1 bg-[#ffffffdf]">
            <div className=" bg-coffee-5 h-[7vh] flex items-center shadow-lg lg:h-36">
                <h1 className="w-full text-[8vw] font-bold text-coffee-1 text-center border-y-2 border-coffee-2 lg:text-8xl">Reviews</h1>
            </div>
            <div className="h-fit lg:grid lg:gap-y-6 lg:grid-cols-2 lg:p-1 lg:px-24 lg:gap-12">
                <ReviewCard />
            </div>
        </div>
    )
}

export default Reviews