import { useContext } from "react"
import FAQItem from "./FAQItem"
import { MyContext } from "./context"

const FAQ = () => {
    const context = useContext(MyContext);
    return (
        <div id="FAQ" className=" h-fit w-full pb-1 bg-coffee-1">
            <div className=" bg-coffee-5 h-[7vh] flex items-center shadow-lg lg:h-36">
                <h1 className="w-full text-[8vw] font-bold text-coffee-1 text-center border-y-2 border-coffee-2 lg:text-8xl">FAQs</h1>
            </div>
                <div>
                {context.FAQ.map(faq => (
                <FAQItem key={faq.id} {...faq} />
            ))}   
                    
                    
                </div>
        </div>
    )
}

export default FAQ