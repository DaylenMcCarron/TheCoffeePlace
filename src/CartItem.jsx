

const CartItem = () => {
    return (
        <div className="flex border-b-[1px] bg-coffee-1 rounded-sm mx-1 border-coffee-3">
            <div className="min-h-[10vw] min-w-[10vw] h-[10vw] w-[10vw]">
                <img className="p-2 rounded-md" src="./assets/chocolateCappuccino.jpg" alt="" />
            </div>
            <div className="ml-2 w-[68vw]">
                <h1 className="text-md my-1 text-amber-950">
                    <div className="h-5 w-5 flex mr-1 justify-center float-left">
                
<div className=" border-2 border-green-500 rounded-md h-4 w-4 flex justify-center mt-1">

<div className="  bg-green-500 rounded-full h-2 w-2 my-auto"></div>
</div>


                    </div>
                
                    A Good Title</h1>
                <p className="text-sm pb-2 text-coffee-6">Description or smtn if needed lore</p>
            </div>
            <div className="min-h-[16vw] h-[16vw] w-fit">
                <h1 className=" text-center mt-2 text-sm font-bold text-coffee-5 bg-white border-coffee-4 border-[1px] border-b-0 rounded-t-md"><span>&#8377;</span> 344/-</h1>
            <div className="border-[1px] border-coffee-2 rounded-md w-fit h-fit bg-coffee-2 text-white flex align-middle justify-center">
                <span className="material-symbols-outlined text-coffee-5">add</span>
                <span className="font-bold text-coffee-5 bg-white px-1">1</span>
                <span className="material-symbols-outlined text-coffee-5">remove</span>
            </div>
            </div>
        </div>
    )
}

export default CartItem