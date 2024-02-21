const ContactUs = () => {

    return (
        <div id="findus" className=" h-fit pb-[10vh] bg-coffee-2">
            <div className=" bg-coffee-5 h-[7vh] flex items-center shadow-lg">
                <h1 className="w-full text-[8vw] font-bold text-coffee-1 text-center border-y-2 border-coffee-2">Find Us</h1>
            </div>
            <div>
                <h1 className=" text-2xl text-coffee-5 font-bold px-3 pt-3">Locate Us:</h1>
                <iframe className="w-[95vw] h-[50vw] mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9047.013113451407!2d72.84571680941106!3d19.04071046318827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e4daeecee5%3A0x7b7c0ce8ac80a020!2sThird%20Wave%20Coffee!5e0!3m2!1sen!2sin!4v1707799795435!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
            <h1 className=" text-2xl text-coffee-5 font-bold px-3 pt-3">Contact Us:</h1>
            <div className=" flex flex-col">  
                <div className=" flex flex-col p-2">
                <p className=" text-coffee-5">Name</p>
                    <input type="text" name="name" id="" className="h-[8vw] p-2" />
                </div>      
                <div className=" flex flex-col p-2">
                <p className=" text-coffee-5">Email</p>
                    <input type="text" name="email" id="" className="h-[8vw]  p-2" />
                </div>      
                <div className=" flex flex-col p-2">
                    <p className=" text-coffee-5">Message</p>
                    <textarea type="text" name="message" id="" className="h-[24vw]  p-2" />
                </div>      
                <input className='bg-coffee-5 mx-2 h-[4vh] text-coffee-1 text-lg' type="submit" />
            </div>
            </div>
            
       </div>
    )
}


export default ContactUs