import CartWindow from "./CartWindow";
import { useContext } from "react";
import { MyContext } from "./context";
import { useState, useEffect, useRef } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
    const context = useContext(MyContext);
    const [viewCart, setViewCart] = useState(false);
    const cartRef = useRef(null); // Use useRef for ref
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (viewCart && cartRef.current && !cartRef.current.contains(event.target)) {
          setViewCart(false);
        }
      };
  
      // Add event listener when component mounts
      document.addEventListener("mousedown", handleClickOutside);
  
      // Cleanup: Remove event listener when component unmounts
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [viewCart]); // Empty dependency array to run only once when the component mounts
  

  const checkoutDisabled = () => {
    toast.error("Checkout Disabled", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      {viewCart && (
        <div ref={cartRef} className={` ${viewCart ? 'visible' : 'hidden'}`}>
          <CartWindow />
        </div>
      )}

      <div className="fixed bottom-0 z-40 bg-coffee-1 w-full h-[8vh] border-t-[1px] border-coffee-4 flex backdrop-blur-sm bg-header ">
      {viewCart == false ? (
          <div className="basis-[10%] bg-coffee-2 flex items-center justify-center">
            <span
              className="material-symbols-outlined -rotate-90"
              onClick={() => {
                setViewCart(!viewCart);
              }}
            >
              arrow_forward_ios
            </span>
          </div>
        ) :
        <div className="basis-[10%] bg-coffee-2 flex items-center justify-center">
            <div
              className="material-symbols-outlined rotate-90"
              
            >
              arrow_forward_ios
            </div>
          </div>
        }
        <div className="basis-[58%] flex flex-col items-right pl-3 justify-center text-coffee-5">
          <p>Items: {context.items}</p>
          <p>Total: <span>&#8377;</span>1245/-</p>
        </div>
        <div className="basis-[30%] flex items-center justify-center">
          <div className="bg-red-400 rounded-md p-3" onClick={checkoutDisabled}>
            <p className="text-coffee-1 text-xl">Checkout</p>
          </div>
        </div>
        <div className="basis-[2%] flex items-center justify-center"></div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Cart;
