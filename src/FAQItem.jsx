import { useState } from "react"

const FAQItem = ({ id, question, answer}) => {
    const [faqActive, setFaqActive] = useState(false)
    return (
            <div onClick={()=>setFaqActive(!faqActive)}>
                <h1 className="bg-coffee-2 mt-1 p-3 text-md">{question}</h1>
                {
                    faqActive ? 
                    <p className="px-3 pt-3 pb-8 text-sm text-coffee-5">{answer}</p>
                    :null
                }

            </div>
                    
                  
    )
}

export default FAQItem