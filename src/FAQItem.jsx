import { useState } from "react"

const FAQItem = () => {
    const [faqActive, setFaqActive] = useState(false)
    return (
            <div onClick={()=>setFaqActive(!faqActive)}>
                <h1 className="bg-coffee-2 mt-1 p-3 text-md">Bla Bla Bla?</h1>
                {
                    faqActive ? 
                    <p className="px-3 pt-3 pb-5 text-sm">Yes! Bla Bla Bla Bla!! But you can also bla when blaing is bla ba</p>
                    :null
                }

            </div>
                    
                  
    )
}

export default FAQItem