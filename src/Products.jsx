import ProductCard from "./ProductCard"

const Products = () => {
    
    return (
        <div className="  bg-coffee-2 pb-5">
            <div className=" bg-coffee-5 h-[7vh] flex items-center shadow-lg">
                <h1 className="w-full text-[8vw] font-bold text-coffee-1 text-center border-y-2 border-coffee-2">SHOP</h1>
            </div>
            <div className=" text-sm flex text-coffee-5">
                <p className=" pr-3 p-1 basis-1/2">Filter : Hot coffee</p>
                <p className=" pl-3 p-1 basis-1/2">Sort By : Price (low-to-high)</p>
            </div>
            <div className="grid gap-2 gap-y-3 grid-cols-2 p-1">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default Products