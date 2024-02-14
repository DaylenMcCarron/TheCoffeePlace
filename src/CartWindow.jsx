import CartItem from "./CartItem"

const CartWindow = () => {
    return (
        <div className=" w-full h-2/3  fixed z-30 bottom-0  shadow-top  bg-coffee-2">
            <h1 className="bg-coffee-5 border-y-2 border-y-coffee-3 text-xl text-center text-coffee-1">Cart</h1>
            <div className=" h-full pb-[20vh] overscroll-contain overflow-y-auto">
                
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />

            </div>
        </div>
    )
}

export default CartWindow