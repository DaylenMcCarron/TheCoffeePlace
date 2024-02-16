import { createContext, useState } from "react";

const MyContext = createContext();
const MyProvider = (props) => {
    const[items,setItems] = useState(0)

    const incItems = () => {
        setItems(items+1);
    }
    const decItems = () => {
        setItems(items-1);
    }


    return (
        <MyContext.Provider value={
            {
                items:items,
                incItems:incItems,
                decItems:decItems,
            
            }

        }>
            {props.children}
        </MyContext.Provider>
    )
}

export {MyContext, MyProvider}