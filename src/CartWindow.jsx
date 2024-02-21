import { useContext } from "react"
import CartItem from "./CartItem"
import { MyContext } from "./context"

const CartWindow = () => {
    const context = useContext(MyContext);
    return (
        <div className=" w-full h-2/3  fixed z-30 bottom-0  shadow-top  bg-coffee-2">
            <h1 className="bg-coffee-5 border-y-2 border-y-coffee-3 text-xl text-center text-coffee-1">Cart</h1>
            <div className=" h-full pb-[20vh] overscroll-contain overflow-y-auto">
                
            {context.products
  .filter(product => product.amt > 0)
  .map(product => (
    <CartItem key={product.id} {...product} incAmt={context.incAmt} decAmt={context.decAmt} />
))}  

            </div>
        </div>
    )
}

export default CartWindow