import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        const element = document.documentElement;
        element.scrollIntoView();
    }, [location]);

    return null;
};

export default ScrollToTop;