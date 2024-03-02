import ReviewCard from "./ReviewCard"


const Reviews = () => {
    return (
        <div id="Reviews" className=" h-fit w-full pb-1 bg-coffee-1">
            <div className=" bg-coffee-5 h-[7vh] flex items-center shadow-lg">
                <h1 className="w-full text-[8vw] font-bold text-coffee-1 text-center border-y-2 border-coffee-2">Reviews</h1>
            </div>
            <div className="h-fit">
                <ReviewCard />
            </div>
        </div>
    )
}

export default Reviews