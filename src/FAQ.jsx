import FAQItem from "./FAQItem"

const FAQ = () => {
    return (
        <div className=" h-fit w-full pb-1 bg-coffee-1">
            <div className=" bg-coffee-5 h-[7vh] flex items-center shadow-lg">
                <h1 className="w-full text-[8vw] font-bold text-coffee-1 text-center border-y-2 border-coffee-2">FAQs</h1>
            </div>
                <div>
                    <FAQItem />
                    <FAQItem />
                    <FAQItem />
                    <FAQItem />
                    <FAQItem />
                    <FAQItem />
                    
                    
                </div>
        </div>
    )
}

export default FAQ