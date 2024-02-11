import ProductCard from "./ProductCard"

const Products = () => {
    
    return (
        <div className=" h-[300vh] bg-coffee-6">
            <div className=" bg-coffee-5 h-[7vh] flex items-center shadow-lg">
                <h1 className="w-full text-[8vw] font-bold text-coffee-1 text-center border-y-2 border-coffee-2">SHOP</h1>
            </div>
            <div className="grid gap-2 gap-y-3 grid-cols-2 p-1 bg-coffee-2">
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