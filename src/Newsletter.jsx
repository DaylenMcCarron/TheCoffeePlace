import { useState } from "react"

const Newsletter = () => {
    const [subscribe,setSubscribe] = useState(true)
    
    return (

        <div className=" w-full h-fit">
        <div className=" pt-12 pb-5 text-white ">
            {subscribe ? 
            <h1 className=" float-right backdrop-blur-sm h-[25%] w-full text-center p-4">Thankyou for Subscribing to our Newsletter. Please check your inbox</h1>
            :<>
            <h1 className=" text-center mb-3 text-lg ">Subscribe to our Newsletter</h1>
            <div className=" flex bg-white m-2 h-[5vh]">

            <input type="email" className=" p-2 w-full text-coffee-5" placeholder="example@gmail.com"/>
            </div>
            <input type="checkbox" className=" float-left mx-3 mt-1 "/>
            <p className=" text-sm text-coffee-2 px-2">By entering your email you agree to receive the 'The Coffee Place' newsletters. You can unsubscribe at any time.</p>
            </>
        
        
            }
            
        <div className="  mx-auto w-full px-2 my-2">

                <button className=" bg-black mx-auto w-full p-2 "
                    onClick={()=>setSubscribe(!subscribe)}
                >
                    {subscribe ?
                    'Unsubscribe':
                    'Subscribe'}
                </button>
        </div>
        </div>
        
        </div>
    )
}

export default Newsletter