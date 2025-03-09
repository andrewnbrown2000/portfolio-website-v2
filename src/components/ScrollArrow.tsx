import React, { useEffect, useState } from 'react';

const ScrollArrow: React.FC = () => {
    const [opacity, setOpacity] = useState(1);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setOpacity(0);
        } else {
            setOpacity(1);
        }
    };

    useEffect(() => {
        setOpacity(window.scrollY > 0 ? 0 : 1);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className="animate-bounce mt-[20vh]"
            id="scroll-arrow"
            style={{ opacity }}
        >
            <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </div>
    );
};

export default ScrollArrow;