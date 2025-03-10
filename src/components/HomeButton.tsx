import React from 'react';
import { useRouter } from 'next/router';

const HomeButton: React.FC = () => {
    const router = useRouter();

    const handleClick = () => {
        if (router.pathname !== '/') {
            router.push('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <button className="home-button cursor-pointer" onClick={handleClick}>
            <img src="/andrew_logo.png" alt="Home" width={100} height={100} />
        </button>
    );
};

export default HomeButton;