import { useState } from "react"
import { useContext } from "react"
import { MyContext } from "./context"

const ProductCard = () => {
    const context = useContext(MyContext);
    const [imgResize, setImageResize] = useState(true)
    return (
        <div className="w-full h-64  rounded-md shadow-sm relative border-coffee-5 bg-glass">
            <p  onClick={()=>setImageResize(!imgResize)} className=" absolute top-[22%] text-xs px-2 h-28 overflow-scroll   text-coffee-4">delicious blend of Lorem ipsum dolor sit amet consectetur adipisicing elit.  corrupti ducimus ullam reiciendis sapiente, qui maxime, omnis delectus perspiciatis hic.</p>
            <img  onClick={()=>setImageResize(!imgResize)} className={`object-cover z-10  ${imgResize ? "h-4/6 w-full"  : " h-1/6 m-2"} rounded-md shadow-xl transition-all`} src="./assets/chocolateCappuccino.jpg" alt="" />

            <h1  onClick={()=>setImageResize(!imgResize)} className=" px-2 text-md text-coffee-5 font-semibold h-12 overflow-hidden absolute top-[68%]">Chocolate Noodles such a big name lmao b i coffee</h1>
            <h1 className="absolute bottom-2 left-2 font-semibold font-sm"><span>&#8377;</span>345/-</h1>
            { context.items == 0 ? 
            <div className="absolute bottom-2 right-2 border-2 border-coffee-5 rounded-md w-7 h-7 bg-glass text-white flex align-middle justify-center">
                <span className="material-symbols-outlined font-bold text-coffee-5" onClick={()=>context.incItems()}>add</span>
            </div>
            :
            <div className="border-[1px] absolute bottom-2 right-2 border-coffee-2 rounded-md w-fit h-fit bg-coffee-2 text-white flex align-middle justify-center">
                <span className="material-symbols-outlined text-coffee-5" onClick={()=>context.decItems()}>remove</span>
                <span className="font-bold text-coffee-5 bg-white px-1">{context.items}</span>
                <span className="material-symbols-outlined text-coffee-5" onClick={()=>context.incItems()}>add</span>
            </div>
            }
            
            </div>
    )
}

export default ProductCard