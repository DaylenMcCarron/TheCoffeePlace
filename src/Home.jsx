import React, { useEffect, useState } from 'react';
import Products from './Products';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import Reviews from './Reviews';

const comments = [
    { comment: 'This bold and intense coffee is perfect for those who like their coffee with a kick. It has a rich, smoky flavor with hints of spice. The strong aroma fills the room and the taste lingers on the palate.', name: 'Celine M' },
    { comment: 'Amazing Coffee + Quick Delivery. Definitely gonna order again!', name: 'A Singh' },
    { comment: 'Every sip of this coffee transports me to a world of bliss. Simply irresistible!', name: 'Emma W' }

        // ... more comments
    ];
const Home = () => {
    const [imageClass, setImageClass] = useState('object-left');


const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
const [commentOpacity, setCommentOpacity] = useState(1);
const [nameOpacity, setNameOpacity] = useState(1);


useEffect(() => {
    const intervalId = setInterval(() => {
        // Fade out the current comment
        setCommentOpacity(0);
        setNameOpacity(0);

        // Wait for fade out to complete before updating the comment
        setTimeout(() => {
            // Increment current comment index modulo the number of comments
            setCurrentCommentIndex(prevIndex => (prevIndex + 1) % comments.length);

            // Fade in the new comment
            setCommentOpacity(1);
            setNameOpacity(1);
        }, 500); // Fade duration

    }, 5000); // Transition every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
}, []); // Run effect only once on component mount


    return (
        <>
        <div className="bg-coffee-1 w-full h-fit">
            <div className="w-full z-10 h-[80vh] absolute bg-gradient-to-b from-black to-transparent"></div>
                <div className='w-full h-[100vh] absolute z-20 pt-[25vh] '>
                    <p className=' text-white  text-3xl text-center ojuju-font m-2 '>What goes best with a cup of coffee? <b>Another cup!</b></p>
                    <p className='  text-md text-center ojuju-font mt-10 text-coffee-1'>In Shop or Straight to your door</p>
                    <div className='w-full flex justify-center '>
                        <button className=' border-coffee-1 border-2 p-2 mt-2 px-12 border-solid text-coffee-1 bg-[#ffe4c823]' onClick={()=>{
                        // Scroll smoothly to the element with ID "shop"
                        document.getElementById('shop').scrollIntoView({
                            behavior: 'smooth'});}
                        }>ORDER NOW</button>
                    </div>
                    {/* <p className='mt-12  text-white  text-4xl text-center bg-[#402b1a88]'>Top-notch coffee, unmatched quality</p> */}
                    <div className='flex justify-center'>
                        <div className='border-2 w-[95%] lg:w-[50%] h-fit font-bold border-coffee-5 text-coffee-5 bg-[#ffecdedb] backdrop-blur-sm mt-[18vh] rounded-md p-2'>
                        <p className={`font-bold ojuju-font text-lg p-2 transition-opacity duration-500`} style={{ opacity: commentOpacity }}>{comments[currentCommentIndex].comment}</p>
            <p className={` ojuju-font font-bold float-right mx-3 transition-opacity duration-500`} style={{ opacity: nameOpacity }}>- {comments[currentCommentIndex].name}</p>
        

                            <p className=' ojuju-font font-semibold w-full pt-8 text-center' onClick={()=>{
                        // Scroll smoothly to the element with ID "shop"
                        document.getElementById('Reviews').scrollIntoView({
                            behavior: 'smooth'});}}>More reviews</p>
                        </div>
                    </div>
                </div>

                <img
                    id="landing-image"
                    className={`w-full h-[100vh] object-cover transition-all duration-[30000ms] ${imageClass}`}
                    src="./assets/coffeeBeans.jpeg"
                    alt=""
                />

            
            
        </div>
        <Products />
        <Reviews />
        <FAQ />
        <ContactUs />
        </>
    );
};

export default Home;
