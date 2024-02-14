import CartWindow from "./CartWindow"

import { useState } from "react"

const Cart = () => {

    const [viewCart,setViewCart] = useState(false)

    return (
        <>
        {viewCart ? 
        
        <CartWindow />
        
        :null}
        <div className="fixed bottom-0 z-40 bg-coffee-1 w-full h-[8vh] border-t-[1px] border-coffee-4 flex backdrop-blur-sm bg-header ">
            <div className=" basis-[10%] bg-coffee-2 flex items-center justify-center" onClick={()=>setViewCart(!viewCart)}>
            <span className="material-symbols-outlined -rotate-90">
arrow_forward_ios
</span>
            </div>
            <div className=" basis-[58%] flex flex-col items-right pl-3 justify-center text-coffee-5">
                <p>Items: 4</p>
                <p>Total: <span>&#8377;</span>1245/-</p>
            </div>
            <div className=" basis-[30%] flex items-center  justify-center"> 
            <div className="bg-red-400 rounded-md p-3"> 
                <p className="  text-coffee-1 text-xl">Checkout</p>
            </div>
            </div>
            <div className=" basis-[2%] flex items-center justify-center"> </div>
        </div>
        </>
    )
}

export default Cart