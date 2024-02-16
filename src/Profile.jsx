import ProductCard from "./ProductCard"

const Profile = () => {
    return (
        <div className="h-screen w-screen bg-gradient-to-b from-coffee-4 pt-[10vh] to-coffee-1 ">
            <div className=" flex justify-center bg-glass rounded-full">
                <img 
                    className="w-1/2"
                    src="/assets/undraw_drink_coffee_v3au.svg" 
                    alt="" 
                />
            </div>
                <h1 className=" text-center text-xl">
                    Donatus. N
                </h1>
            <div className="grid gap-1 gap-y-1 grid-cols-2 p-1">
                <div className=" rounded-sm p-2 w-full bg-glass text-coffee-5 mx-auto">Orders</div>
                <div className=" rounded-sm p-2 w-full bg-glass text-coffee-5 mx-auto">Profile</div>
                <div className=" rounded-sm p-2 w-full bg-glass text-coffee-5 mx-auto">Address</div>
                <div className=" rounded-sm p-2 w-full bg-glass text-coffee-5 mx-auto">Support</div>
            </div>
            <div className=" h-fit pb-2 w-full bg-glass mt-5">
                <h1 className="p-2 text-amber-900">Must Try:</h1>
                <div className="grid gap-2 gap-y-3 grid-cols-2 p-1">
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}

export default Profile