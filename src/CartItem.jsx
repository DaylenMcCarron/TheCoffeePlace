

const CartItem = ({ id, name, price, description, amt, image, incAmt, decAmt }) => {
    return (
        <div className="flex border-b-[1px] bg-coffee-1 rounded-sm mx-1 border-coffee-3">
            <div className="min-h-[10vw] min-w-[10vw] h-[10vw] w-[10vw]">
                <img className="p-2 rounded-md" src={`./assets/${image}`} alt="" />
            </div>
            <div className="ml-2 w-[68vw]">
                <h1 className="text-md my-1 text-amber-950">
                    <div className="h-5 w-5 flex mr-1 justify-center float-left">
                
<div className=" border-2 border-green-500 rounded-md h-4 w-4 flex justify-center mt-1">

<div className="  bg-green-500 rounded-full h-2 w-2 my-auto"></div>
</div>


                    </div>
                
                    {name}</h1>
                <p className="text-xs pb-2 text-coffee-6">{description}</p>
            </div>
            <div className="min-h-[16vw] h-[16vw] lg:h-0 lg:min-h-0 w-fit lg:pt-6 lg:pl-24">
                <h1 className=" text-center mt-2 text-sm font-bold text-coffee-5 bg-white border-coffee-4 border-[1px] border-b-0 rounded-t-md"><span>&#8377;</span>{price * amt}</h1>
            <div className="border-[1px] border-coffee-2 rounded-md w-fit h-fit bg-coffee-2 text-white flex align-middle justify-center">
                <span className="material-symbols-outlined text-coffee-5" onClick={()=>decAmt(id,price)}>remove</span>
                <span className="font-bold text-coffee-5 bg-white px-1">{amt}</span>
                <span className="material-symbols-outlined text-coffee-5" onClick={()=>incAmt(id,price)}>add</span>
            </div>
            </div>
        </div>
    )
}

export default CartItem