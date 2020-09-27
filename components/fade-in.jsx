import { useEffect, useRef } from "react";

const FadeIn = ({ children, delay = 0, ...otherProps }) => {
    const spanRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                observer.unobserve(spanRef.current);
                setTimeout(() =>spanRef.current.classList.add("visible"), delay);
            }
        }, {
            rootMargin: "0px 0px -25% 0px"
        });

        observer.observe(spanRef.current);

        return () => observer.unobserve(spanRef.current);
    }, []);

    return (
        <>
            <style jsx>{`
                span {
                    opacity: 0;
                    transform: translate(0, 10px);
                    transition: opacity 1s, transform 1s;
                    display: block;
                }

                span.visible {
                    opacity: 1;
                    transform: translate(0, 0);
                }
            `}</style>
            <span ref={spanRef} {...otherProps}>{children}</span>
        </>
    );
};

export { FadeIn };
