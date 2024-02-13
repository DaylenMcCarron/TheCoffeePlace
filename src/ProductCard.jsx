
const ProductCard = () => {
    return (
        <div className="w-full h-64  rounded-md shadow-sm relative border-coffee-5 bg-coffee-1">
            <img className="object-cover w-full h-52 rounded-md shadow-xl" src="./assets/chocolateCappuccino.jpg" alt="" />

            <h1 className=" pb-2 pl-2 text-md text-coffee-5 font-semibold">Chocolate<br /> Cappuccino</h1>
            <div className="absolute bottom-2 right-2 border-2 border-coffee-5 rounded-md w-7 h-7 bg-coffee-1 text-white flex align-middle justify-center">
                <span className="material-symbols-outlined font-bold text-coffee-5">add</span>
            </div>
            </div>
    )
}

export default ProductCard