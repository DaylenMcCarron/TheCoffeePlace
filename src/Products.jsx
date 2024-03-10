import { useContext } from "react";
import ProductCard from "./ProductCard"
import { MyContext } from "./context";

const Products = () => {
    const context = useContext(MyContext);
    return (
        <div id="shop" className=" bg-glass pb-5">
            <div className=" bg-coffee-5 h-[7vh] flex items-center shadow-lg">
                <h1 className="w-full text-[8vw] font-bold text-coffee-1 text-center border-y-2 border-coffee-2">SHOP</h1>
            </div>
            <div className=" text-sm flex text-coffee-5 bg-[#e6ccb2b0]">
                <p className=" p-1 basis-1/2">Filter: 
                <select name="filter" id="filter" className="bg-transparent outline-none appearance-none p-2">
                <option value="none">None</option>
                <option value="volvo">Hot Coffee</option>
                <option value="saab">Cold Coffee</option>
                <option value="mercedes">Sweet</option>
                <option value="audi">Bitter</option>
                </select>
                </p>
                <p className=" p-1 basis-1/2">Sort By : 
                <select name="sortby" id="sortby" className="bg-transparent w-4/6 outline-none appearance-none p-2">
                <option value="none">None</option>
                <option value="price-lf">Lowest first</option>
                <option value="volvo">Highest first</option>
                <option value="saab">Featured</option>
                <option value="mercedes">Best Selling</option>
                </select>
                </p>
            </div>
            <div className="grid gap-2 gap-y-3 grid-cols-2 p-1">
            {context.products.map(product => (
                <ProductCard key={product.id} {...product} incAmt={context.incAmt} decAmt={context.decAmt} />
            ))}   
            </div>
        </div>
    )
}

export default Products