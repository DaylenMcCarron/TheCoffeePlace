import React, { useEffect, useState } from 'react';

const Home = () => {
    const [imageClass, setImageClass] = useState('object-left');
    const [imagePosition, setImagePosition] = useState('fixed');
    const [lastFixedPosition, setLastFixedPosition] = useState(0);

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
            const scrollThreshold = 1000; // Change this value as needed

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
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-coffee-1 w-full h-[3000vh]">
            <div className="pt-[7vh] bg-coffee-5"></div>
            <div className="w-full h-[30vh] object-contain" style={{ position: imagePosition, top: `${lastFixedPosition}px` }}>
                <img
                    id="landing-image"
                    className={`w-full h-[100vh] object-cover transition-all duration-[30000ms] ${imageClass}`}
                    src="./src/assets/coffeeLanding.gif"
                    alt=""
                />
                
                <div className="w-full h-[30vh] top-[7vh] absolute">
                    <div className="w-full h-[60vh] absolute bg-gradient-to-b from-black to-transparent">
                        
                    </div>
                </div>
            </div>
            <div className='absolute top-[10vh] w-full'>
                <h1 className="text-white text-center font-mono text-2xl pt-4 absolute w-full top-[10vh]">
                    Brewing Dreams,<br />One Sip at a Time                        </h1>
                <h1 className="text-white text-center font-mono text-2xl pt-4 absolute top-[50vh] anim-fadein">
                    Brewing Dreams,<br />One Sip at a Time, Type More stuff whatever you want
                </h1>
                <h1 className="text-white text-center font-mono text-2xl pt-4 absolute top-[100vh] anim-fadein">                        
                    Brewing Dreams,<br />One Sip at a Time,  Update this also Put as much content as suited
                </h1>
            </div>
        </div>
    );
};

export default Home;
