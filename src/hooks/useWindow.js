import { useEffect, useState } from "react";

const useWindow = () => {
    const [dimensions, setDimensions] = useState({
        width: undefined,
        height: undefined,
    });

    const handleWindowSize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        handleWindowSize();

        window.addEventListener("resize", handleWindowSize);

        return () => window.removeEventListener("resize", handleWindowSize);
    }, []);

    return {
        ...dimensions,
    };
};

export default useWindow;
