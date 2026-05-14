import { useEffect, useState } from 'react';

export const ScrollTopButton = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!showScrollTop) return null;

    return (
        <button className="scroll-top-btn" onClick={scrollToTop}>
            ↑
        </button>
    );
};
