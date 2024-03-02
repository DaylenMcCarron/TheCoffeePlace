import React, { useEffect, useState } from 'react';
import Products from './Products';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import Reviews from './Reviews';
import ImageCarousel from './ImageCarousal';

const Home = () => {
    const [imageClass, setImageClass] = useState('object-left');
    const [imagePosition, setImagePosition] = useState('fixed');
    const [lastFixedPosition, setLastFixedPosition] = useState(0);
    const [oneTextClass, setOneTextClass] = useState('opacity-1')
    const [twoTextClass, setTwoTextClass] = useState('opacity-0')
    const [threeTextClass, setThreeTextClass] = useState('opacity-0')

    const VhtoPx = (val) => {
        return (val * document.documentElement.clientHeight) / 100;
    }

    const backForth = () => {
        setImageClass((prevImageClass) =>
            prevImageClass === 'object-left' ? 'object-right' : 'object-left'
        );
    };

    useEffect(() => {
        backForth(); // Start the animation immediately
        const intervalId = setInterval(backForth, 30000);
        return () => clearInterval(intervalId); // Cleanup the interval when the component is unmounted
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            // Set the scroll threshold value in pixels
            const scrollThreshold = VhtoPx(320); // Change this value as needed

            // Check the scroll position
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;

            // Update the image position based on the scroll position
            if (scrollPosition >= scrollThreshold) {
                // Set position to 'absolute' and use the last fixed position as the top value
                setImagePosition('absolute');
                setLastFixedPosition(scrollThreshold);
            } else {
                // Set position to 'fixed'
                setImagePosition('fixed');
                setLastFixedPosition(0);
            }

            if (scrollPosition > VhtoPx(0) && scrollPosition < VhtoPx(50)) {
                setOneTextClass('opacity-1')
            } else {
                setOneTextClass('opacity-0')
            }
            if (scrollPosition > VhtoPx(120) && scrollPosition < VhtoPx(170)) {
                setTwoTextClass('opacity-1')
            } else {
                setTwoTextClass('opacity-0')
            }
            if (scrollPosition > VhtoPx(240) && scrollPosition < VhtoPx(290)) {
                setThreeTextClass('opacity-1')
            } else {
                setThreeTextClass('opacity-0')
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <div className="bg-coffee-1 w-full h-[420svh]">
            <div className="pt-[7vh] bg-coffee-5"></div>
            <div className="w-full h-[30vh] object-contain" style={{ position: imagePosition, top: `${lastFixedPosition}px` }}>
                <img
                    id="landing-image"
                    className={`w-full h-[100vh] object-cover transition-all duration-[30000ms] ${imageClass}`}
                    src="./assets/coffeeBeans.jpeg"
                    alt=""
                />
                
                <div className="w-full h-[30vh] top-[7vh] absolute">
                    <div className="w-full h-[60vh] absolute bg-gradient-to-b from-black to-transparent">
                        <h1 className={`text-white text-center font-mono text-2xl pt-4 transition-all duration-1000 absolute top-[6vh]  w-full ${oneTextClass}`}>
                            Brewing Dreams,<br />One Sip at a Time                        
                        </h1>
                        <h1 className={`text-white text-center font-mono text-2xl pt-4 transition-all duration-1000 absolute top-[6vh]  w-full ${twoTextClass}`}>
                        Coffee Convenience, Crafted to Perfection: Unwrap the Aroma of Joy at Your Doorstep
                        </h1>
                        <h1 className={`text-white text-center font-mono text-2xl pt-4 transition-all duration-1000 absolute top-[6vh] w-full ${threeTextClass}`}>                        
                        Sip, Smile, Repeat: Where Freshness Meets Your Threshold – Coffee, Delivered with Love.
                        </h1>
                    </div>
                </div>


            </div>
            <div className={`w-full h-fit absolute top-[370vh]`}>
                <ImageCarousel />
            </div>
            
        </div>
        <Products />
        <Reviews />
        <FAQ />
        <ContactUs />
        </>
    );
};

export default Home;
