import { useState } from "react"

const ProductCard = () => {
    const [imgResize, setImageResize] = useState(true)
    return (
        <div className="w-full h-64  rounded-md shadow-sm relative border-coffee-5 bg-glass">
            <p  onClick={()=>setImageResize(!imgResize)} className=" absolute top-24 text-xs p-2 text-coffee-4">delicious blend of Lorem ipsum dolor sit amet consectetur adipisicing elit.  corrupti ducimus ullam reiciendis sapiente, qui maxime, omnis delectus perspiciatis hic.</p>
            <img  onClick={()=>setImageResize(!imgResize)} className={`object-cover ${imgResize ? "w-full h-52" : "w-20 h-20 m-2"} rounded-md shadow-xl transition-all`} src="./assets/chocolateCappuccino.jpg" alt="" />

            <h1  onClick={()=>setImageResize(!imgResize)} className=" pl-2 text-md text-coffee-5 font-semibold absolute bottom-1 pr-7">Chocolate Noodles i mean coffee</h1>
            <div className="absolute bottom-2 right-2 border-2 border-coffee-5 rounded-md w-7 h-7 bg-glass text-white flex align-middle justify-center">
                <span className="material-symbols-outlined font-bold text-coffee-5" onClick={()=>console.log("Hekko")}>add</span>
            </div>
            </div>
    )
}

export default ProductCard